/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufStruct from "../protobuf/struct.pb"
import * as GoogleApiLabel from "base/google/api/label.pb"
import * as GoogleApiLaunch_stage from "base/google/api/launch_stage.pb"
export type MonitoredResourceDescriptor = {
  name?: string
  type?: string
  displayName?: string
  description?: string
  labels?: GoogleApiLabel.LabelDescriptor[]
  launchStage?: GoogleApiLaunch_stage.LaunchStage
}

export type MonitoredResource = {
  type?: string
  labels?: {[key: string]: string}
}

export type MonitoredResourceMetadata = {
  systemLabels?: GoogleProtobufStruct.Struct
  userLabels?: {[key: string]: string}
}