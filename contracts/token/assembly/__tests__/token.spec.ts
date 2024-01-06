import { chain, MockVM } from '@koinos/sdk-as';
import { CONTRACT_ID, HEAD_BLOCK_TIME, MOCK_ACCOUNT_1 } from './test-constants';
import { ExampleTokenContract } from '../example-token-contract';

describe('Token', () => {
  beforeEach(() => {
    MockVM.reset();
    MockVM.setContractId(CONTRACT_ID);
    MockVM.setCaller(new chain.caller_data(MOCK_ACCOUNT_1));

    // Set the block timestamp
    const headInfo = new chain.head_info();
    headInfo.head_block_time = HEAD_BLOCK_TIME;
    headInfo.last_irreversible_block = 3;

    MockVM.setHeadInfo(headInfo);
  });

  it('Should return token name', () => {
    const token = new ExampleTokenContract();
    const name = token.name();

    expect(name.value).toBe('My Token');
  });
});
