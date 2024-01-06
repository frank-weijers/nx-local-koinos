import { Storage, System } from '@koinos/sdk-as';
import { common } from '@volano/utils';
import { TokenContract } from '@volano/token';

const TEST_SPACE_ID = 100;

export class ExampleTokenContract extends TokenContract {
  contractId: Uint8Array;
  testStorage!: Storage.Obj<common.str>;

  constructor() {
    super();

    this.contractId = System.getContractId();
    this.testStorage = new Storage.Obj(
      this.contractId,
      TEST_SPACE_ID,
      common.str.decode,
      common.str.encode,
      null
    );
  }

  /**
   * Get version of the contract
   * @external
   * @readonly
   */
  version(): common.str {
    return new common.str('1.0.0');
  }

  /**
   * Get name of test value from storage
   * @external
   * @readonly
   */
  test(): common.str {
    const test = this.testStorage.get();

    return test !== null ? test : new common.str('unknown');
  }

  /**
   * Initialize test value in storage token
   * @external
   */
  update_test(): common.str {
    const newValue = new common.str('something');

    this.testStorage.put(newValue);

    return newValue;
  }
}
