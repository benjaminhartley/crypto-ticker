import nock from 'nock';

export const setCoinGeckoBtcUsdNock = () => {
  nock('https://api.coingecko.com:443', { encodedQueryParams: true })
    .get('/api/v3/simple/price')
    .query({ ids: 'bitcoin', vs_currencies: 'usd' })
    .reply(200, { bitcoin: { usd: 48082 } }, [
      'Date',
      'Sun, 16 May 2021 02:28:21 GMT',
      'Content-Type',
      'application/json; charset=utf-8',
      'Transfer-Encoding',
      'chunked',
      'Connection',
      'close',
      'Cache-Control',
      'public, max-age=30',
      'Access-Control-Allow-Origin',
      '*',
      'Access-Control-Allow-Methods',
      'POST, PUT, DELETE, GET, OPTIONS',
      'Access-Control-Request-Method',
      '*',
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Access-Control-Expose-Headers',
      'link, per-page, total',
      'Vary',
      'Accept-Encoding, Origin',
      'ETag',
      'W/"3c9d4b5e01ee621e638dff9ba4e7fbdc"',
      'X-Request-Id',
      '11b35ff3-23a1-4bff-883c-e09b31bd1161',
      'X-Runtime',
      '0.053206',
      'Alternate-Protocol',
      '443:npn-spdy/2',
      'CF-Cache-Status',
      'HIT',
      'Age',
      '30',
      'Expires',
      'Sun, 16 May 2021 02:28:51 GMT',
      'cf-request-id',
      '0a1499de0300000d1a99ace000000001',
      'Expect-CT',
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      'Server',
      'cloudflare',
      'CF-RAY',
      '65012c100ec00d1a-ATL',
      'alt-svc',
      'h3-27=":443"; ma=86400, h3-28=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]);
};
