/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ApiVersionLocal } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSpecialPropertiesClient } from "../azureSpecialPropertiesClient";
import {
  ApiVersionLocalGetMethodLocalValidOptionalParams,
  ApiVersionLocalGetMethodLocalNullOptionalParams,
  ApiVersionLocalGetPathLocalValidOptionalParams,
  ApiVersionLocalGetSwaggerLocalValidOptionalParams
} from "../models";

/** Class containing ApiVersionLocal operations. */
export class ApiVersionLocalImpl implements ApiVersionLocal {
  private readonly client: AzureSpecialPropertiesClient;

  /**
   * Initialize a new instance of the class ApiVersionLocal class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSpecialPropertiesClient) {
    this.client = client;
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param options The options parameters.
   */
  getMethodLocalValid(
    options?: ApiVersionLocalGetMethodLocalValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getMethodLocalValidOperationSpec
    );
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = null to succeed
   * @param options The options parameters.
   */
  getMethodLocalNull(
    options?: ApiVersionLocalGetMethodLocalNullOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getMethodLocalNullOperationSpec
    );
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param options The options parameters.
   */
  getPathLocalValid(
    options?: ApiVersionLocalGetPathLocalValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getPathLocalValidOperationSpec
    );
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param options The options parameters.
   */
  getSwaggerLocalValid(
    options?: ApiVersionLocalGetSwaggerLocalValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getSwaggerLocalValidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getMethodLocalValidOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/apiVersion/method/string/none/query/local/2.0",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMethodLocalNullOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/apiVersion/method/string/none/query/local/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getPathLocalValidOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/apiVersion/path/string/none/query/local/2.0",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getSwaggerLocalValidOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/apiVersion/swagger/string/none/query/local/2.0",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
