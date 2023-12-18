import fs from 'fs';
import path from 'path';
import { Serializer } from '@roamin/local-koinos';
// eslint-disable-next-line @nx/enforce-module-boundaries
import * as Abi from '../../../../../../dist/contracts/token/assembly/tokencontract-abi.json';

export const abi = Abi;
export const serializer = new Serializer(Abi.types);
export const wasm = fs.readFileSync(
  path.resolve('build/token/release', 'token.wasm'),
);
