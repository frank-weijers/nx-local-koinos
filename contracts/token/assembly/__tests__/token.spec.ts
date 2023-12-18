import { chain, MockVM } from '@koinos/sdk-as';
import { CONTRACT_ID, HEAD_BLOCK_TIME, MOCK_ACCOUNT_1 } from '@volano/utils';

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

  it('Shoulda', () => {
    //
  });
});
