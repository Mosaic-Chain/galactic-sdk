import { AssetRoute, ChainRoutes } from '@galacticcouncil/xcm-core';

import { mos } from '../../assets';
import { hydration, mosaic } from '../../chains';
import { BalanceBuilder, ExtrinsicBuilder } from '../../builders';

const toHydration: AssetRoute[] = [
  new AssetRoute({
    source: {
      asset: mos,
      balance: BalanceBuilder().substrate().system().account(),
      destinationFee: {
        balance: BalanceBuilder().substrate().system().account(),
      },
    },
    destination: {
      chain: hydration,
      asset: mos,
      fee: {
        amount: 2, // TODO: what should this be?
        asset: mos,
      },
    },
    extrinsic: ExtrinsicBuilder().polkadotXcm().reserveTransferAssets(),
  }),
];

export const mosaicConfig = new ChainRoutes({
  chain: mosaic,
  routes: [...toHydration],
});
