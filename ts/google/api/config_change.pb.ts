/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum ChangeType {
  CHANGE_TYPE_UNSPECIFIED = "CHANGE_TYPE_UNSPECIFIED",
  ADDED = "ADDED",
  REMOVED = "REMOVED",
  MODIFIED = "MODIFIED",
}

export type ConfigChange = {
  element?: string
  oldValue?: string
  newValue?: string
  changeType?: ChangeType
  advices?: Advice[]
}

export type Advice = {
  description?: string
}