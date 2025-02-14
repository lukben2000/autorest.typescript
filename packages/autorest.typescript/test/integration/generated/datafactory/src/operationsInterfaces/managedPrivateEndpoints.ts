import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ManagedPrivateEndpointResource,
  ManagedPrivateEndpointsListByFactoryOptionalParams,
  ManagedPrivateEndpointsCreateOrUpdateOptionalParams,
  ManagedPrivateEndpointsCreateOrUpdateResponse,
  ManagedPrivateEndpointsGetOptionalParams,
  ManagedPrivateEndpointsGetResponse,
  ManagedPrivateEndpointsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedPrivateEndpoints. */
export interface ManagedPrivateEndpoints {
  /**
   * Lists managed private endpoints.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    options?: ManagedPrivateEndpointsListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<ManagedPrivateEndpointResource>;
  /**
   * Creates or updates a managed private endpoint.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param managedPrivateEndpoint Managed private endpoint resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    managedPrivateEndpoint: ManagedPrivateEndpointResource,
    options?: ManagedPrivateEndpointsCreateOrUpdateOptionalParams
  ): Promise<ManagedPrivateEndpointsCreateOrUpdateResponse>;
  /**
   * Gets a managed private endpoint.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointsGetOptionalParams
  ): Promise<ManagedPrivateEndpointsGetResponse>;
  /**
   * Deletes a managed private endpoint.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointsDeleteOptionalParams
  ): Promise<void>;
}
