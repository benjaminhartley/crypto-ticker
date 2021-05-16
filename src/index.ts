import fs from 'fs';

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const toml = require('toml');

import priceService, { Coin, Currency } from './services/priceService';

import log from './utils/logger';

interface Config {
  coins: Coin[];
  currencies: Currency[];
  POLL_INTERVAL: number;
}

async function getConfigData(): Promise<Config> {
  return new Promise((resolve, reject) => {
    fs.readFile('config.toml', (err, data) => {
      if (err) {
        log.error('error reading file:', err);
        return reject(new Error('error reading config file'));
      }

      const configData = toml.parse(data);
      const { config } = configData;

      const coins: Coin[] = config.coins;
      const currencies: Currency[] = config.currencies;
      const POLL_INTERVAL: number = config.poll_interval;

      resolve({
        coins,
        currencies,
        POLL_INTERVAL,
      });
    });
  });
}

(async function main() {
  try {
    const config = await getConfigData();

    setInterval(async () => {
      console.clear();

      const res = await priceService.getPricesSimple({
        coins: config.coins,
        currencies: config.currencies,
      });

      for (const key of Object.keys(res)) {
        const label = key.toUpperCase();

        for (const cur of Object.keys(res[key])) {
          const curLabel = cur.toUpperCase();

          log.info(`${curLabel} per ${label} : ${res[key][cur]}`);
        }

        console.log('\n');
      }
    }, config.POLL_INTERVAL * 1000);
  } catch (e) {
    log.error(e);
    process.exit(1);
  }
})();
