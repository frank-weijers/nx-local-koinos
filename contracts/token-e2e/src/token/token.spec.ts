/* eslint-disable @typescript-eslint/ban-ts-comment */
import os from 'os';
import path from 'path';
import {
  Contract,
  LocalKoinos,
  Signer,
  Token,
  utils,
} from '@roamin/local-koinos';

// ABIs
// eslint-disable-next-line @nx/enforce-module-boundaries
import { token } from './abi';

jest.setTimeout(600000);

// pre configs for windows paths
const options = {};

const localKoinos = new LocalKoinos(options);

const [genesis, koin, tokenAcct, user1, user2, user3, user4] =
  localKoinos.getAccounts();

let TokenContract: Contract;

beforeAll(async () => {
  // start local-koinos node
  await localKoinos.startNode();

  await localKoinos.deployKoinContract({ mode: 'manual' });
  await localKoinos.mintKoinDefaultAccounts({ mode: 'manual' });
  await localKoinos.deployNameServiceContract({ mode: 'manual' });
  await localKoinos.setNameServiceRecord('koin', koin.address, {
    mode: 'manual',
  });

  console.log({
    tokenAcct,
    path: path.resolve(__dirname, '../../../../build/token/release/token.wasm'),
    abi: token.abi,
  });

  // Deploy token contract
  TokenContract = await localKoinos.deployContract(
    tokenAcct.wif,
    path.resolve(__dirname, '../../../../build/token/release/token.wasm'),
    token.abi,
    { mode: 'manual' },
  );

  await localKoinos.startBlockProduction();

  // console.log(tokenAbi.methods);
});

afterAll(() => {
  // stop local-koinos node
  localKoinos.stopNode();
});

async function wait(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

describe('token', () => {
  it('must return name', async () => {
    let response;

    response = await TokenContract.functions.name();

    console.log(response);

    expect(response?.result?.value).toEqual('My Token');
  });
});
