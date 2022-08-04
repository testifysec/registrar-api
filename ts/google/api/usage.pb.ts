/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type Usage = {
  requirements?: string[]
  rules?: UsageRule[]
  producerNotificationChannel?: string
}

export type UsageRule = {
  selector?: string
  allowUnregisteredCalls?: boolean
  skipServiceControl?: boolean
}