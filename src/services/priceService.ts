/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const CoinGecko = require('coingecko-api');

const client = new CoinGecko();

export type Coin = 'bitcoin' | 'ethereum' | 'algorand' | 'nano';
export type Currency = 'usd' | 'mxn' | 'eth' | 'btc';

export interface GetPricesSimpleRequest {
  coins: Coin[];
  currencies: Currency[];
}

type CurrencyNumberMap = { [key in Currency]?: number };
type GetPricesSimpleResponse = { [key in Coin]?: CurrencyNumberMap };

async function getPricesSimple(
  request: GetPricesSimpleRequest,
): Promise<GetPricesSimpleResponse> {
  const res = await client.simple.price({
    ids: request.coins,
    vs_currencies: request.currencies,
  });

  return res.data;
}

export default {
  getPricesSimple,
};
