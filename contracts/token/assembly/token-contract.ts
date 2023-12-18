import { common } from './proto';

export class TokenContract {
  /**
   * Get name of the token
   * @external
   * @readonly
   */
  name(): common.str {
    return new common.str('test');
  }
}
