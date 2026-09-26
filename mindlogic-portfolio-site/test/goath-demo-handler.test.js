import assert from 'node:assert/strict'
import test from 'node:test'

import handler from '../api/goath-demo.js'

const SERVER_SECRET = 'portfolio-server-secret-that-is-at-least-32-characters'

function createResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: null,
    redirectLocation: null,
    setHeader(name, value) {
      this.headers[name.toLowerCase()] = value
    },
    status(code) {
      this.statusCode = code
      return this
    },
    json(value) {
      this.body = value
      return this
    },
    redirect(code, location) {
      this.statusCode = code
      this.redirectLocation = location
      return this
    },
  }
}

test('issues a server-to-server ticket and redirects without exposing the fixed secret', async () => {
  const originalFetch = globalThis.fetch
  const originalSecret = process.env.PORTFOLIO_DEMO_SECRET
  const originalApiBase = process.env.GOATH_API_BASE_URL
  let capturedRequest
  try {
    process.env.PORTFOLIO_DEMO_SECRET = SERVER_SECRET
    process.env.GOATH_API_BASE_URL = 'https://api.goath.ai.kr'
    globalThis.fetch = async (url, options) => {
      capturedRequest = { url, options }
      return new Response(JSON.stringify({
        success: true,
        data: { ticket: 'signed-one-time-ticket-'.padEnd(64, 'x'), expiresIn: 60 },
      }), { status: 200, headers: { 'content-type': 'application/json' } })
    }

    for (const demo of ['mindlogic', 'daangn', 'portone', 'dalpha', 'sionic-ai', 'elice', 'channel-talk', 'toss', 'allganize']) {
    const response = createResponse()
    await handler({ method: 'GET', query: { demo } }, response)

    assert.equal(capturedRequest.url, 'https://api.goath.ai.kr/auth/portfolio-demo/ticket')
    assert.equal(capturedRequest.options.headers['x-portfolio-demo-secret'], SERVER_SECRET)
    assert.deepEqual(JSON.parse(capturedRequest.options.body), { demo })
    assert.equal(response.statusCode, 302)
    assert.match(response.redirectLocation, /^https:\/\/api\.goath\.ai\.kr\/auth\/portfolio-demo\/exchange\?ticket=/)
    assert.equal(response.redirectLocation.includes(SERVER_SECRET), false)
    assert.equal(response.headers['cache-control'], 'no-store')
    }
  } finally {
    globalThis.fetch = originalFetch
    if (originalSecret === undefined) delete process.env.PORTFOLIO_DEMO_SECRET
    else process.env.PORTFOLIO_DEMO_SECRET = originalSecret
    if (originalApiBase === undefined) delete process.env.GOATH_API_BASE_URL
    else process.env.GOATH_API_BASE_URL = originalApiBase
  }
})

test('fails closed when the Vercel-only secret is missing', async () => {
  const originalSecret = process.env.PORTFOLIO_DEMO_SECRET
  try {
    delete process.env.PORTFOLIO_DEMO_SECRET
    const response = createResponse()
    await handler({ method: 'GET' }, response)
    assert.equal(response.statusCode, 503)
    assert.deepEqual(response.body, { error: 'Demo login is unavailable' })
  } finally {
    if (originalSecret !== undefined) process.env.PORTFOLIO_DEMO_SECRET = originalSecret
  }
})

test('rejects non-GET requests', async () => {
  const response = createResponse()
  await handler({ method: 'POST' }, response)
  assert.equal(response.statusCode, 405)
  assert.equal(response.headers.allow, 'GET')
})

test('rejects unsupported demo kinds before calling GOATH', async () => {
  const originalSecret = process.env.PORTFOLIO_DEMO_SECRET
  try {
    process.env.PORTFOLIO_DEMO_SECRET = SERVER_SECRET
    const response = createResponse()
    await handler({ method: 'GET', query: { demo: 'unknown' } }, response)
    assert.equal(response.statusCode, 400)
    assert.deepEqual(response.body, { error: 'Unsupported portfolio demo' })
  } finally {
    if (originalSecret === undefined) delete process.env.PORTFOLIO_DEMO_SECRET
    else process.env.PORTFOLIO_DEMO_SECRET = originalSecret
  }
})
