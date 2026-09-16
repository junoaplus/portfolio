import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

import {
  buildExchangeUrl,
  resolveGoathApiBaseUrl,
  resolvePortfolioDemoKind,
  validateTicketPayload,
} from '../api/_demo-contract.js'

test('accepts only the fixed GOATH API origin', () => {
  assert.equal(resolveGoathApiBaseUrl(undefined), 'https://api.goath.ai.kr')
  assert.throws(() => resolveGoathApiBaseUrl('http://api.goath.ai.kr'))
  assert.throws(() => resolveGoathApiBaseUrl('https://evil.example'))
  assert.throws(() => resolveGoathApiBaseUrl('https://api.goath.ai.kr/other'))
})

test('accepts only supported portfolio demo kinds and keeps the legacy default', () => {
  assert.equal(resolvePortfolioDemoKind(undefined), 'mindlogic')
  assert.equal(resolvePortfolioDemoKind('daangn'), 'daangn')
  assert.equal(resolvePortfolioDemoKind('portone'), 'portone')
  for (const kind of ['dalpha', 'sionic-ai', 'elice', 'channel-talk', 'toss']) {
    assert.equal(resolvePortfolioDemoKind(kind), kind)
  }
  assert.throws(() => resolvePortfolioDemoKind('admin'))
  assert.throws(() => resolvePortfolioDemoKind(['mindlogic']))
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

test('routes the GOATH service button through the server-only demo handoff', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
  assert.match(html, /href="\/api\/goath-demo"[^>]*>서비스 보기/)
  assert.doesNotMatch(html, /href="https:\/\/goath\.ai\.kr"[^>]*>서비스 보기/)
})
