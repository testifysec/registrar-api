/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type LoggingLoggingDestination = {
  monitoredResource?: string
  logs?: string[]
}

export type Logging = {
  producerDestinations?: LoggingLoggingDestination[]
  consumerDestinations?: LoggingLoggingDestination[]
}