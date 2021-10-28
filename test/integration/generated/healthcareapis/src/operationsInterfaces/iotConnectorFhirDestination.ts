import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  IotConnectorFhirDestinationGetOptionalParams,
  IotConnectorFhirDestinationGetResponse,
  IotFhirDestination,
  IotConnectorFhirDestinationCreateOrUpdateOptionalParams,
  IotConnectorFhirDestinationCreateOrUpdateResponse,
  IotConnectorFhirDestinationDeleteOptionalParams
} from "../models";

/** Interface representing a IotConnectorFhirDestination. */
export interface IotConnectorFhirDestination {
  /**
   * Gets the properties of the specified Iot Connector FHIR destination.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    options?: IotConnectorFhirDestinationGetOptionalParams
  ): Promise<IotConnectorFhirDestinationGetResponse>;
  /**
   * Creates or updates an IoT Connector FHIR destination resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param iotFhirDestination The parameters for creating or updating an IoT Connector FHIR destination
   *                           resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    iotFhirDestination: IotFhirDestination,
    options?: IotConnectorFhirDestinationCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotConnectorFhirDestinationCreateOrUpdateResponse>,
      IotConnectorFhirDestinationCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an IoT Connector FHIR destination resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param iotFhirDestination The parameters for creating or updating an IoT Connector FHIR destination
   *                           resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    iotFhirDestination: IotFhirDestination,
    options?: IotConnectorFhirDestinationCreateOrUpdateOptionalParams
  ): Promise<IotConnectorFhirDestinationCreateOrUpdateResponse>;
  /**
   * Deletes an IoT Connector FHIR destination.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    options?: IotConnectorFhirDestinationDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an IoT Connector FHIR destination.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    options?: IotConnectorFhirDestinationDeleteOptionalParams
  ): Promise<void>;
}
