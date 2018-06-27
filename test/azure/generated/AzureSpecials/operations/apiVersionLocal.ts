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
import * as Models from "../models";
import * as Mappers from "../models/apiVersionLocalMappers";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a ApiVersionLocal. */
export class ApiVersionLocal {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a ApiVersionLocal.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getMethodLocalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            apiVersion: '2.0',
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        getMethodLocalValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = null to succeed
   *
   * @param {ApiVersionLocalGetMethodLocalNullOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getMethodLocalNullWithHttpOperationResponse(options?: Models.ApiVersionLocalGetMethodLocalNullOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    let apiVersion = (options && options.apiVersion !== undefined) ? options.apiVersion : undefined;

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            apiVersion,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        getMethodLocalNullOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getPathLocalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            apiVersion: '2.0',
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        getPathLocalValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getSwaggerLocalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            apiVersion: '2.0',
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        getSwaggerLocalValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMethodLocalValid(): Promise<void>;
  getMethodLocalValid(options: msRest.RequestOptionsBase): Promise<void>;
  getMethodLocalValid(callback: msRest.ServiceCallback<void>): void;
  getMethodLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getMethodLocalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getMethodLocalValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getMethodLocalValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = null to succeed
   *
   * @param {ApiVersionLocalGetMethodLocalNullOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMethodLocalNull(): Promise<void>;
  getMethodLocalNull(options: Models.ApiVersionLocalGetMethodLocalNullOptionalParams): Promise<void>;
  getMethodLocalNull(callback: msRest.ServiceCallback<void>): void;
  getMethodLocalNull(options: Models.ApiVersionLocalGetMethodLocalNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getMethodLocalNull(options?: Models.ApiVersionLocalGetMethodLocalNullOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getMethodLocalNullWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getMethodLocalNullWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getPathLocalValid(): Promise<void>;
  getPathLocalValid(options: msRest.RequestOptionsBase): Promise<void>;
  getPathLocalValid(callback: msRest.ServiceCallback<void>): void;
  getPathLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getPathLocalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getPathLocalValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getPathLocalValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getSwaggerLocalValid(): Promise<void>;
  getSwaggerLocalValid(options: msRest.RequestOptionsBase): Promise<void>;
  getSwaggerLocalValid(callback: msRest.ServiceCallback<void>): void;
  getSwaggerLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getSwaggerLocalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getSwaggerLocalValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getSwaggerLocalValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}

// Operation Specifications
const getMethodLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/local/2.0",
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2.0',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "this.client.acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getMethodLocalNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/local/null",
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        serializedName: "api-version",
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "this.client.acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getPathLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/path/string/none/query/local/2.0",
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2.0',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "this.client.acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getSwaggerLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/swagger/string/none/query/local/2.0",
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2.0',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "this.client.acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
