/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type MonitoringMonitoringDestination = {
  monitoredResource?: string
  metrics?: string[]
}

export type Monitoring = {
  producerDestinations?: MonitoringMonitoringDestination[]
  consumerDestinations?: MonitoringMonitoringDestination[]
}