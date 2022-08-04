/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufAny from "../protobuf/any.pb"
import * as GoogleProtobufTimestamp from "../protobuf/timestamp.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);
export type DistributionRange = {
  min?: number
  max?: number
}

export type DistributionBucketOptionsLinear = {
  numFiniteBuckets?: number
  width?: number
  offset?: number
}

export type DistributionBucketOptionsExponential = {
  numFiniteBuckets?: number
  growthFactor?: number
  scale?: number
}

export type DistributionBucketOptionsExplicit = {
  bounds?: number[]
}


type BaseDistributionBucketOptions = {
}

export type DistributionBucketOptions = BaseDistributionBucketOptions
  & OneOf<{ linearBuckets: DistributionBucketOptionsLinear; exponentialBuckets: DistributionBucketOptionsExponential; explicitBuckets: DistributionBucketOptionsExplicit }>

export type DistributionExemplar = {
  value?: number
  timestamp?: GoogleProtobufTimestamp.Timestamp
  attachments?: GoogleProtobufAny.Any[]
}

export type Distribution = {
  count?: string
  mean?: number
  sumOfSquaredDeviation?: number
  range?: DistributionRange
  bucketOptions?: DistributionBucketOptions
  bucketCounts?: string[]
  exemplars?: DistributionExemplar[]
}