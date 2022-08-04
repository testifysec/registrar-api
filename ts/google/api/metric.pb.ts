/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufDuration from "../protobuf/duration.pb"
import * as GoogleApiLabel from "base/google/api/label.pb"
import * as GoogleApiLaunch_stage from "base/google/api/launch_stage.pb"

export enum MetricDescriptorMetricKind {
  METRIC_KIND_UNSPECIFIED = "METRIC_KIND_UNSPECIFIED",
  GAUGE = "GAUGE",
  DELTA = "DELTA",
  CUMULATIVE = "CUMULATIVE",
}

export enum MetricDescriptorValueType {
  VALUE_TYPE_UNSPECIFIED = "VALUE_TYPE_UNSPECIFIED",
  BOOL = "BOOL",
  INT64 = "INT64",
  DOUBLE = "DOUBLE",
  STRING = "STRING",
  DISTRIBUTION = "DISTRIBUTION",
  MONEY = "MONEY",
}

export type MetricDescriptorMetricDescriptorMetadata = {
  launchStage?: GoogleApiLaunch_stage.LaunchStage
  samplePeriod?: GoogleProtobufDuration.Duration
  ingestDelay?: GoogleProtobufDuration.Duration
}

export type MetricDescriptor = {
  name?: string
  type?: string
  labels?: GoogleApiLabel.LabelDescriptor[]
  metricKind?: MetricDescriptorMetricKind
  valueType?: MetricDescriptorValueType
  unit?: string
  description?: string
  displayName?: string
  metadata?: MetricDescriptorMetricDescriptorMetadata
  launchStage?: GoogleApiLaunch_stage.LaunchStage
  monitoredResourceTypes?: string[]
}

export type Metric = {
  type?: string
  labels?: {[key: string]: string}
}