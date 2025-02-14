// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Record used in operation return type */
export interface OutputRecord {
  requiredProp: string;
}

/** Record used both as operation parameter and return type */
export interface InputOutputRecord {
  requiredProp: string;
}
