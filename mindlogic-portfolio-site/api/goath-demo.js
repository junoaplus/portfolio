import {
  buildExchangeUrl,
  resolveGoathApiBaseUrl,
  validateTicketPayload,
} from './_demo-contract.js'

const TICKET_TIMEOUT_MS = 8_000

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const demoSecret = process.env.PORTFOLIO_DEMO_SECRET
  if (!demoSecret || demoSecret.length < 32) {
    return response.status(503).json({ error: 'Demo login is unavailable' })
  }

  try {
    const apiBaseUrl = resolveGoathApiBaseUrl(process.env.GOATH_API_BASE_URL)
    const ticketResponse = await fetch(`${apiBaseUrl}/auth/portfolio-demo/ticket`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-portfolio-demo-secret': demoSecret,
      },
      body: '{}',
      cache: 'no-store',
      signal: AbortSignal.timeout(TICKET_TIMEOUT_MS),
    })

    if (!ticketResponse.ok) {
      throw new Error(`GOATH ticket request failed with HTTP ${ticketResponse.status}`)
    }
    const issued = validateTicketPayload(await ticketResponse.json())
    const exchangeUrl = buildExchangeUrl(apiBaseUrl, issued.ticket)

    response.setHeader('Cache-Control', 'no-store')
    response.setHeader('Referrer-Policy', 'no-referrer')
    response.setHeader('X-Robots-Tag', 'noindex, nofollow')
    return response.redirect(302, exchangeUrl)
  } catch (error) {
    console.error('GOATH portfolio demo handoff failed', {
      message: error instanceof Error ? error.message : 'Unknown error',
    })
    return response.status(503).json({ error: 'Demo login is temporarily unavailable' })
  }
}
