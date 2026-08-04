import assert from 'node:assert/strict'
import test from 'node:test'

import {
  buildExchangeUrl,
  resolveGoathApiBaseUrl,
  transformPortfolioHtml,
  validateTicketPayload,
} from '../api/_demo-contract.js'

test('accepts only the fixed GOATH API origin', () => {
  assert.equal(resolveGoathApiBaseUrl(undefined), 'https://api.goath.ai.kr')
  assert.throws(() => resolveGoathApiBaseUrl('http://api.goath.ai.kr'))
  assert.throws(() => resolveGoathApiBaseUrl('https://evil.example'))
  assert.throws(() => resolveGoathApiBaseUrl('https://api.goath.ai.kr/other'))
})

test('validates 60-second ticket contract without exposing service secrets', () => {
  const value = validateTicketPayload({ data: { ticket: 'x'.repeat(64), expiresIn: 60 } })
  assert.deepEqual(value, { ticket: 'x'.repeat(64), expiresIn: 60 })
  assert.throws(() => validateTicketPayload({ data: { ticket: 'short', expiresIn: 60 } }))
  assert.throws(() => validateTicketPayload({ data: { ticket: 'x'.repeat(64), expiresIn: 61 } }))
})

test('builds only the GOATH exchange URL with the one-time ticket', () => {
  const url = new URL(buildExchangeUrl('https://api.goath.ai.kr', 'signed-ticket'))
  assert.equal(url.origin, 'https://api.goath.ai.kr')
  assert.equal(url.pathname, '/auth/portfolio-demo/exchange')
  assert.equal(url.searchParams.get('ticket'), 'signed-ticket')
})

test('replaces only the GOATH service link and keeps navigation in the same tab', () => {
  const html = '<main><a href="https://goath.ai.kr" target="_blank" rel="noreferrer">서비스 보기 <span>↗</span></a></main>'
  const transformed = transformPortfolioHtml(html)
  assert.match(transformed, /href="\/api\/goath-demo"/)
  assert.doesNotMatch(transformed, /target="_blank"/)
  assert.throws(() => transformPortfolioHtml('<main>missing</main>'))
})
