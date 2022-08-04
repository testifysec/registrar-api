/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type Quota = {
  limits?: QuotaLimit[]
  metricRules?: MetricRule[]
}

export type MetricRule = {
  selector?: string
  metricCosts?: {[key: string]: string}
}

export type QuotaLimit = {
  name?: string
  description?: string
  defaultLimit?: string
  maxLimit?: string
  freeTier?: string
  duration?: string
  metric?: string
  unit?: string
  values?: {[key: string]: string}
  displayName?: string
}