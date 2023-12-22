const { Signer, Provider, Contract } = require('koilib');
const abi = require('../../../dist/contracts/token/assembly/tokencontract-abi.json');
const fs = require('fs');
const path = require('path');

const TOKEN_CONTRACT_WIF = '';

const main = async () => {
  const provider = new Provider('https://harbinger-api.koinos.io');

  const signer = Signer.fromWif(TOKEN_CONTRACT_WIF);
  signer.provider = provider;

  const contract = new Contract({
    id: signer.address,
    abi,
    provider: signer.provider,
    signer,
    bytecode: fs.readFileSync(path.resolve(__dirname, '../../../build/token/release/token.wasm'))
  });

  const { transaction, receipt } = await contract.deploy({
    // contract options
    abi: fs.readFileSync(path.resolve(__dirname, '../../../dist/contracts/token/assembly/tokencontract-abi.json')).toString(),
    authorizesTransactionApplication: true,
  });

  console.log('The contract is being deployed. Transaction receipt:');
  console.log(receipt);

  const { blockNumber } = await transaction.wait('byBlock', 60000);

  console.log(`Contract successfully deployed at address ${contract.getId()} in block ${blockNumber}`);
};

main()
  .catch(err => console.error(err));
