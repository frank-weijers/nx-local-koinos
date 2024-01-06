import { System } from '@koinos/sdk-as';
import { common } from '@volano/utils';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { token } from '@volano/token';

export class TokenContract {
  callArgs: System.getArgumentsReturn | null = null;

  protected readonly _name: string = 'My Token';
  protected readonly _symbol: string = 'TKN';
  protected readonly _decimals: u32 = 8;

  /**
   * Get name of the token
   * @external
   * @readonly
   */
  name(): common.str {
    return new common.str(this._name);
  }

  /**
   * Get the symbol of the token
   * @external
   * @readonly
   */
  symbol(): common.str {
    return new common.str(this._symbol);
  }

  /**
   * Get the decimals of the token
   * @external
   * @readonly
   */
  decimals(): common.uint32 {
    return new common.uint32(this._decimals);
  }

  /**
   * Get name, symbol and decimals
   * @external
   * @readonly
   */
  get_info(): token.info {
    return new token.info(this._name, this._symbol, this._decimals);
  }
}
