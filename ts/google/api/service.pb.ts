/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufApi from "../protobuf/api.pb"
import * as GoogleProtobufType from "../protobuf/type.pb"
import * as GoogleProtobufWrappers from "../protobuf/wrappers.pb"
import * as GoogleApiAuth from "base/google/api/auth.pb"
import * as GoogleApiBackend from "base/google/api/backend.pb"
import * as GoogleApiBilling from "base/google/api/billing.pb"
import * as GoogleApiContext from "base/google/api/context.pb"
import * as GoogleApiControl from "base/google/api/control.pb"
import * as GoogleApiDocumentation from "base/google/api/documentation.pb"
import * as GoogleApiEndpoint from "base/google/api/endpoint.pb"
import * as GoogleApiHttp from "base/google/api/http.pb"
import * as GoogleApiLog from "base/google/api/log.pb"
import * as GoogleApiLogging from "base/google/api/logging.pb"
import * as GoogleApiMetric from "base/google/api/metric.pb"
import * as GoogleApiMonitored_resource from "base/google/api/monitored_resource.pb"
import * as GoogleApiMonitoring from "base/google/api/monitoring.pb"
import * as GoogleApiQuota from "base/google/api/quota.pb"
import * as GoogleApiSource_info from "base/google/api/source_info.pb"
import * as GoogleApiSystem_parameter from "base/google/api/system_parameter.pb"
import * as GoogleApiUsage from "base/google/api/usage.pb"
export type Service = {
  name?: string
  title?: string
  producerProjectId?: string
  id?: string
  apis?: GoogleProtobufApi.Api[]
  types?: GoogleProtobufType.Type[]
  enums?: GoogleProtobufType.Enum[]
  documentation?: GoogleApiDocumentation.Documentation
  backend?: GoogleApiBackend.Backend
  http?: GoogleApiHttp.Http
  quota?: GoogleApiQuota.Quota
  authentication?: GoogleApiAuth.Authentication
  context?: GoogleApiContext.Context
  usage?: GoogleApiUsage.Usage
  endpoints?: GoogleApiEndpoint.Endpoint[]
  control?: GoogleApiControl.Control
  logs?: GoogleApiLog.LogDescriptor[]
  metrics?: GoogleApiMetric.MetricDescriptor[]
  monitoredResources?: GoogleApiMonitored_resource.MonitoredResourceDescriptor[]
  billing?: GoogleApiBilling.Billing
  logging?: GoogleApiLogging.Logging
  monitoring?: GoogleApiMonitoring.Monitoring
  systemParameters?: GoogleApiSystem_parameter.SystemParameters
  sourceInfo?: GoogleApiSource_info.SourceInfo
  configVersion?: GoogleProtobufWrappers.UInt32Value
}