/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Deletes a VM scale set.
 *
 * @summary Deletes a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/ForceDeleteVirtualMachineScaleSets.json
 */
import {
  VirtualMachineScaleSetsDeleteOptionalParams,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function forceDeleteAVMScaleSet() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const forceDeletion = true;
  const options: VirtualMachineScaleSetsDeleteOptionalParams = {
    forceDeletion
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginDeleteAndWait(
    resourceGroupName,
    vmScaleSetName,
    options
  );
  console.log(result);
}

forceDeleteAVMScaleSet().catch(console.error);
