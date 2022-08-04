/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum LabelDescriptorValueType {
  STRING = "STRING",
  BOOL = "BOOL",
  INT64 = "INT64",
}

export type LabelDescriptor = {
  key?: string
  valueType?: LabelDescriptorValueType
  description?: string
}