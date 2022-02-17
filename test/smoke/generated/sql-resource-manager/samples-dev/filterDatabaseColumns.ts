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
 * This sample demonstrates how to List database columns
 *
 * @summary List database columns
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ColumnsListByDatabaseMax.json
 */
import {
  DatabaseColumnsListByDatabaseOptionalParams,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function filterDatabaseColumns() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "myRG";
  const serverName = "serverName";
  const databaseName = "myDatabase";
  const schema = ["dbo"];
  const table = ["customer", "address"];
  const column = ["username"];
  const orderBy = ["schema asc", "table", "column desc"];
  const options: DatabaseColumnsListByDatabaseOptionalParams = {
    schema,
    table,
    column,
    orderBy
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.databaseColumns.listByDatabase(
    resourceGroupName,
    serverName,
    databaseName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

filterDatabaseColumns().catch(console.error);
