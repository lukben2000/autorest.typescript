// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "./models/models.js";
import {
  GroupRenamedTwoOptions,
  GroupRenamedFourOptions,
  GroupRenamedSixOptions,
  RenamedOneOptions,
  RenamedThreeOptions,
  RenamedFiveOptions,
} from "./models/options.js";
import {
  renamedTwo,
  renamedFour,
  renamedSix,
  renamedOne,
  renamedThree,
  renamedFive,
  createRenamedOperation,
  RenamedOperationClientOptions,
  ServiceContext,
} from "./api/index.js";

export { RenamedOperationClientOptions } from "./api/RenamedOperationContext.js";

export class RenamedOperationClient {
  private _client: ServiceContext;

  constructor(client: ClientType, options: RenamedOperationClientOptions = {}) {
    this._client = createRenamedOperation(client, options);
  }

  group = {
    renamedTwo: (options?: GroupRenamedTwoOptions): Promise<void> => {
      return renamedTwo(this._client, options);
    },
    renamedFour: (options?: GroupRenamedFourOptions): Promise<void> => {
      return renamedFour(this._client, options);
    },
    renamedSix: (options?: GroupRenamedSixOptions): Promise<void> => {
      return renamedSix(this._client, options);
    },
  };

  renamedOne(
    options: RenamedOneOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedOne(this._client, options);
  }

  renamedThree(
    options: RenamedThreeOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedThree(this._client, options);
  }

  renamedFive(
    options: RenamedFiveOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedFive(this._client, options);
  }
}
