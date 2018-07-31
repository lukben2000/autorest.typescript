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

export const AutoRestUrlTestServiceOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutoRestUrlTestServiceOptions",
    modelProperties: {
      globalStringQuery: {
        serializedName: "globalStringQuery",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueriesGetBooleanNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetBooleanNullOptions",
  type: {
    name: "Composite",
    className: "QueriesGetBooleanNullOptionalParams",
    modelProperties: {
      boolQuery: {
        serializedName: "boolQuery",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const QueriesGetIntNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetIntNullOptions",
  type: {
    name: "Composite",
    className: "QueriesGetIntNullOptionalParams",
    modelProperties: {
      intQuery: {
        serializedName: "intQuery",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QueriesGetLongNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetLongNullOptions",
  type: {
    name: "Composite",
    className: "QueriesGetLongNullOptionalParams",
    modelProperties: {
      longQuery: {
        serializedName: "longQuery",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QueriesFloatNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "FloatNullOptions",
  type: {
    name: "Composite",
    className: "QueriesFloatNullOptionalParams",
    modelProperties: {
      floatQuery: {
        serializedName: "floatQuery",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QueriesDoubleNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "DoubleNullOptions",
  type: {
    name: "Composite",
    className: "QueriesDoubleNullOptionalParams",
    modelProperties: {
      doubleQuery: {
        serializedName: "doubleQuery",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QueriesStringNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "StringNullOptions",
  type: {
    name: "Composite",
    className: "QueriesStringNullOptionalParams",
    modelProperties: {
      stringQuery: {
        serializedName: "stringQuery",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueriesEnumValidOptionalParams: msRest.CompositeMapper = {
  serializedName: "EnumValidOptions",
  type: {
    name: "Composite",
    className: "QueriesEnumValidOptionalParams",
    modelProperties: {
      enumQuery: {
        serializedName: "enumQuery",
        type: {
          name: "Enum",
          allowedValues: [
            "red color",
            "green color",
            "blue color"
          ]
        }
      }
    }
  }
};

export const QueriesEnumNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "EnumNullOptions",
  type: {
    name: "Composite",
    className: "QueriesEnumNullOptionalParams",
    modelProperties: {
      enumQuery: {
        serializedName: "enumQuery",
        type: {
          name: "Enum",
          allowedValues: [
            "red color",
            "green color",
            "blue color"
          ]
        }
      }
    }
  }
};

export const QueriesByteMultiByteOptionalParams: msRest.CompositeMapper = {
  serializedName: "ByteMultiByteOptions",
  type: {
    name: "Composite",
    className: "QueriesByteMultiByteOptionalParams",
    modelProperties: {
      byteQuery: {
        serializedName: "byteQuery",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const QueriesByteNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "ByteNullOptions",
  type: {
    name: "Composite",
    className: "QueriesByteNullOptionalParams",
    modelProperties: {
      byteQuery: {
        serializedName: "byteQuery",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const QueriesDateNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "DateNullOptions",
  type: {
    name: "Composite",
    className: "QueriesDateNullOptionalParams",
    modelProperties: {
      dateQuery: {
        serializedName: "dateQuery",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const QueriesDateTimeNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "DateTimeNullOptions",
  type: {
    name: "Composite",
    className: "QueriesDateTimeNullOptionalParams",
    modelProperties: {
      dateTimeQuery: {
        serializedName: "dateTimeQuery",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const QueriesArrayStringCsvValidOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringCsvValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringCsvValidOptionalParams",
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

export const QueriesArrayStringCsvNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringCsvNullOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringCsvNullOptionalParams",
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

export const QueriesArrayStringCsvEmptyOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringCsvEmptyOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringCsvEmptyOptionalParams",
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

export const QueriesArrayStringSsvValidOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringSsvValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringSsvValidOptionalParams",
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

export const QueriesArrayStringTsvValidOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringTsvValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringTsvValidOptionalParams",
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

export const QueriesArrayStringPipesValidOptionalParams: msRest.CompositeMapper = {
  serializedName: "ArrayStringPipesValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringPipesValidOptionalParams",
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

export const PathItemsGetAllWithValuesOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetAllWithValuesOptions",
  type: {
    name: "Composite",
    className: "PathItemsGetAllWithValuesOptionalParams",
    modelProperties: {
      localStringQuery: {
        serializedName: "localStringQuery",
        type: {
          name: "String"
        }
      },
      pathItemStringQuery: {
        serializedName: "pathItemStringQuery",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathItemsGetGlobalQueryNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetGlobalQueryNullOptions",
  type: {
    name: "Composite",
    className: "PathItemsGetGlobalQueryNullOptionalParams",
    modelProperties: {
      localStringQuery: {
        serializedName: "localStringQuery",
        type: {
          name: "String"
        }
      },
      pathItemStringQuery: {
        serializedName: "pathItemStringQuery",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathItemsGetGlobalAndLocalQueryNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetGlobalAndLocalQueryNullOptions",
  type: {
    name: "Composite",
    className: "PathItemsGetGlobalAndLocalQueryNullOptionalParams",
    modelProperties: {
      localStringQuery: {
        serializedName: "localStringQuery",
        type: {
          name: "String"
        }
      },
      pathItemStringQuery: {
        serializedName: "pathItemStringQuery",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathItemsGetLocalPathItemQueryNullOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetLocalPathItemQueryNullOptions",
  type: {
    name: "Composite",
    className: "PathItemsGetLocalPathItemQueryNullOptionalParams",
    modelProperties: {
      localStringQuery: {
        serializedName: "localStringQuery",
        type: {
          name: "String"
        }
      },
      pathItemStringQuery: {
        serializedName: "pathItemStringQuery",
        type: {
          name: "String"
        }
      }
    }
  }
};
