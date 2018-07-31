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


export const Product: msRest.CompositeMapper = {
  serializedName: "Product",
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      productId: {
        serializedName: "product_id",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "display_name",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        defaultValue: '100',
        type: {
          name: "String"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CatalogDictionary: msRest.CompositeMapper = {
  serializedName: "CatalogDictionary",
  type: {
    name: "Composite",
    className: "CatalogDictionary",
    modelProperties: {
      productDictionary: {
        serializedName: "productDictionary",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "Product"
            }
          }
        }
      }
    }
  }
};

export const CatalogArray: msRest.CompositeMapper = {
  serializedName: "CatalogArray",
  type: {
    name: "Composite",
    className: "CatalogArray",
    modelProperties: {
      productArray: {
        serializedName: "productArray",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Product"
            }
          }
        }
      }
    }
  }
};

export const CatalogArrayOfDictionary: msRest.CompositeMapper = {
  serializedName: "CatalogArrayOfDictionary",
  type: {
    name: "Composite",
    className: "CatalogArrayOfDictionary",
    modelProperties: {
      productArrayOfDictionary: {
        serializedName: "productArrayOfDictionary",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: {
                type: {
                  name: "Composite",
                  className: "Product"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const CatalogDictionaryOfArray: msRest.CompositeMapper = {
  serializedName: "CatalogDictionaryOfArray",
  type: {
    name: "Composite",
    className: "CatalogDictionaryOfArray",
    modelProperties: {
      productDictionaryOfArray: {
        serializedName: "productDictionaryOfArray",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Composite",
                  className: "Product"
                }
              }
            }
          }
        }
      }
    }
  }
};

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

export const ComplexModelClientCreateOptionalParams: msRest.CompositeMapper = {
  serializedName: "CreateOptions",
  type: {
    name: "Composite",
    className: "ComplexModelClientCreateOptionalParams",
    modelProperties: {
      productDictionaryOfArray: {
        serializedName: "productDictionaryOfArray",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Composite",
                  className: "Product"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const ComplexModelClientUpdateOptionalParams: msRest.CompositeMapper = {
  serializedName: "UpdateOptions",
  type: {
    name: "Composite",
    className: "ComplexModelClientUpdateOptionalParams",
    modelProperties: {
      productArrayOfDictionary: {
        serializedName: "productArrayOfDictionary",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: {
                type: {
                  name: "Composite",
                  className: "Product"
                }
              }
            }
          }
        }
      }
    }
  }
};
