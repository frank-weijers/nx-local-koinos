import { Storage, System } from '@koinos/sdk-as';
import { common } from './proto';

const TEST_SPACE_ID = 100;

export class TokenContract {
  contractId: Uint8Array;
  testStorage: Storage.Obj<common.str>;

  constructor() {
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
   * Get name of the token
   * @external
   * @readonly
   */
  name(): common.str {
    return new common.str('test');
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
