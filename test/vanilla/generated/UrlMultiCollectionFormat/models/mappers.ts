/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";


export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueriesArrayStringMultiNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringMultiNullOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringMultiNullOptionalParams",
    modelProperties: {
      arrayQuery: {
        serializedName: "arrayQuery",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringMultiEmptyOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringMultiEmptyOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringMultiEmptyOptionalParams",
    modelProperties: {
      arrayQuery: {
        serializedName: "arrayQuery",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const QueriesArrayStringMultiValidOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringMultiValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringMultiValidOptionalParams",
    modelProperties: {
      arrayQuery: {
        serializedName: "arrayQuery",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};
