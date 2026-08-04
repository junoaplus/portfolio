import { transformPortfolioHtml } from './_demo-contract.js'

const UPSTREAM_PORTFOLIO_URL =
  'https://hwang-junho-ai-portfolio-o9nphfbrb-junos-projects-281d0d94.vercel.app/'

export default async function handler(request, response) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD')
    return response.status(405).end()
  }

  try {
    const upstream = await fetch(UPSTREAM_PORTFOLIO_URL, {
      headers: { accept: 'text/html' },
      signal: AbortSignal.timeout(8_000),
    })
    if (!upstream.ok) {
      throw new Error(`Portfolio upstream failed with HTTP ${upstream.status}`)
    }
    const html = transformPortfolioHtml(await upstream.text())
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=86400')
    response.setHeader('X-Content-Type-Options', 'nosniff')
    if (request.method === 'HEAD') return response.status(200).end()
    return response.status(200).send(html)
  } catch (error) {
    console.error('Portfolio upstream rendering failed', {
      message: error instanceof Error ? error.message : 'Unknown error',
    })
    return response.status(503).send('Portfolio is temporarily unavailable')
  }
}
