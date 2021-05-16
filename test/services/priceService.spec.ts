import { expect } from 'chai';
import nock from 'nock';

import priceService, { GetPricesSimpleRequest } from '../../src/services/priceService';

import { setCoinGeckoBtcUsdNock } from './mocks/coinGeckoBtcUsdNock';

describe('UNIT: services/priceService', () => {
  beforeEach(() => {
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  describe('getPricesSimple', () => {
    describe('valid request', () => {
      const options: GetPricesSimpleRequest = {
        coins: ['bitcoin'],
        currencies: ['usd'],
      };

      let res;

      beforeEach(async () => {
        setCoinGeckoBtcUsdNock();

        res = await priceService.getPricesSimple(options);
      });

      it('should return correctly formatted data', () => {
        expect(res).to.deep.equal({
          bitcoin: {
            usd: 48082,
          },
        });
      });
    });
  });
});
