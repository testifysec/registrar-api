/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum PropertyPropertyType {
  UNSPECIFIED = "UNSPECIFIED",
  INT64 = "INT64",
  BOOL = "BOOL",
  STRING = "STRING",
  DOUBLE = "DOUBLE",
}

export type ProjectProperties = {
  properties?: Property[]
}

export type Property = {
  name?: string
  type?: PropertyPropertyType
  description?: string
}