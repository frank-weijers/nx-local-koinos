import { chain, MockVM } from '@koinos/sdk-as';
import { CONTRACT_ID, HEAD_BLOCK_TIME, MOCK_ACCOUNT_1 } from '@volano/utils';
import { TokenContract } from '../token-contract';

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
    const token = new TokenContract();
    const name = token.name();

    expect(name.value).toBe('My Token');
  });

  it('Should return token info', () => {
    const token = new TokenContract();
    const name = token.get_info();

    expect(name.name).toBe('My Token');
    expect(name.symbol).toBe('TKN');
    expect(name.decimals).toBe(8);
  });
});
