export const DEFAULT_GOATH_API_BASE_URL = 'https://api.goath.ai.kr'
export const PORTFOLIO_DEMO_EXCHANGE_PATH = '/auth/portfolio-demo/exchange'

export function resolveGoathApiBaseUrl(rawValue) {
  const parsed = new URL(rawValue || DEFAULT_GOATH_API_BASE_URL)
  if (parsed.protocol !== 'https:' || parsed.hostname !== 'api.goath.ai.kr' || parsed.pathname !== '/') {
    throw new Error('GOATH_API_BASE_URL must be https://api.goath.ai.kr')
  }
  parsed.search = ''
  parsed.hash = ''
  parsed.username = ''
  parsed.password = ''
  return parsed.toString().replace(/\/$/, '')
}

export function validateTicketPayload(payload) {
  const ticket = payload?.data?.ticket
  const expiresIn = Number(payload?.data?.expiresIn)
  if (typeof ticket !== 'string' || ticket.length < 32 || ticket.length > 4096) {
    throw new Error('GOATH returned an invalid demo ticket')
  }
  if (!Number.isFinite(expiresIn) || expiresIn <= 0 || expiresIn > 60) {
    throw new Error('GOATH returned an invalid demo ticket expiry')
  }
  return { ticket, expiresIn }
}

export function buildExchangeUrl(apiBaseUrl, ticket) {
  const exchangeUrl = new URL(PORTFOLIO_DEMO_EXCHANGE_PATH, `${resolveGoathApiBaseUrl(apiBaseUrl)}/`)
  exchangeUrl.searchParams.set('ticket', ticket)
  return exchangeUrl.toString()
}
