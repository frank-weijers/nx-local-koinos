const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  class: 'UtilsContract',
  proto: ['./proto/common.proto'],
  files: ['./utils-contract.ts'],
  sourceDir: './assembly',
  buildDir: '../../dist/packages/utils/assembly',
  protoImport: [
    {
      name: '@koinos/sdk-as',
      path: '../../node_modules/koinos-precompiler-as/koinos-proto/koinos',
    },
    {
      name: '__',
      path: '../../node_modules/koinos-precompiler-as/koinos-proto/google',
    },
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
          description: 'Volano Utils',
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
