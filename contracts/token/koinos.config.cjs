const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  class: 'ExampleTokenContract',
  proto: [],
  files: [
    '../../../packages/token/assembly/token-contract.ts',
    './example-token-contract.ts'
  ],
  sourceDir: './assembly',
  buildDir: '../../dist/contracts/token/assembly',
  protoImport: [
    {
      name: '@koinos/sdk-as',
      path: '../../node_modules/koinos-precompiler-as/koinos-proto/koinos',
    },
    {
      name: '__',
      path: '../../node_modules/koinos-precompiler-as/koinos-proto/google',
    },
    {
      name: '@volano/token',
      path: '../../node_modules/@volano/token/assembly/proto',
    },
    {
      name: '@volano/utils',
      path: '../../node_modules/@volano/utils/assembly/proto',
    }
  ],
  networks: {
    harbinger: {
      rpcNodes: [
        'https://harbinger-api.koinos.io',
        'https://testnet.koinosblocks.com',
      ],
      accounts: {
        manaSharer: {
          privateKey: process.env.HARBINGER_MANA_SHARER_PRIVATE_KEY,
        },
        contract: {
          privateKey: process.env.HARBINGER_SMARTLOCKER_CONTRACT_PRIVATE_KEY,
          id: process.env.HARBINGER_SMARTLOCKER_CONTRACT_ID,
          name: 'Volano Vault',
          image: 'https://volano.app/volano.jpg',
          description: 'Volano Vault',
        },
        contractOwner: {
          privateKey: process.env.HARBINGER_SMARTLOCKER_OWNER_PRIVATE_KEY,
        },
      },
    },
    mainnet: {
      rpcNodes: ['https://api.koinosblocks.com', 'https://api.koinos.io'],
      accounts: {
        manaSharer: {
          privateKey: process.env.MAINNET_MANA_SHARER_PRIVATE_KEY,
        },
        contract: {
          privateKey: process.env.MAINNET_SMARTLOCKER_CONTRACT_PRIVATE_KEY,
          id: process.env.MAINNET_SMARTLOCKER_CONTRACT_ID,
          name: process.env.MAINNET_SMARTLOCKER_CONTRACT_NAME,
          image: process.env.MAINNET_SMARTLOCKER_CONTRACT_IMAGE,
          paymentPeriod:
          process.env.MAINNET_SMARTLOCKER_CONTRACT_PAYMENT_PERIOD,
          description: process.env.MAINNET_SMARTLOCKER_CONTRACT_DESCRIPTION,
          beneficiaries: process.env.MAINNET_SMARTLOCKER_CONTRACT_BENEFICIARIES,
        },
        contractOwner: {
          privateKey: process.env.MAINNET_SMARTLOCKER_OWNER_PRIVATE_KEY,
        },
      },
    },
  },
};
