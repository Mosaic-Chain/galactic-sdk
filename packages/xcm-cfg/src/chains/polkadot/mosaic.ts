import {
  ChainEcosystem as Ecosystem,
  Parachain,
} from '@galacticcouncil/xcm-core';

import { mos } from '../../assets';

const endpoints: string[] = [];
for (const gw of ['mainnet-gw1.mosaicchain.io', 'mainnet-gw2.mosaicchain.io']) {
  for (const node of ['MosaicNode1', 'MosaicNode2', 'MosaicNode3', 'MosaicNode4', 'MosaicNode5', 'MosaicNode6']) {
    endpoints.push(`wss://${gw}/${node}/chain`);
  }
}

export const mosaic = new Parachain({
  assetsData: [
    {
      asset: mos,
      id: 'Native',
      xcmLocation: {
        parents: 0,
        interior: 'Here',
      },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  explorer: 'https://mainnet-explorer.mosaicchain.io',
  genesisHash:
    '0xe9bb9edbc674faacf806ad9ea66edc3c90a01925723745f9b0ffa060acba3f05',
  key: 'mosaic',
  name: 'Mosaic Chain',
  parachainId: 3377,
  ss58Format: 0,
  // ws: endpoints,
  ws: 'ws://localhost:8000',
});
