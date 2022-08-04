/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

export enum BackendRulePathTranslation {
  PATH_TRANSLATION_UNSPECIFIED = "PATH_TRANSLATION_UNSPECIFIED",
  CONSTANT_ADDRESS = "CONSTANT_ADDRESS",
  APPEND_PATH_TO_ADDRESS = "APPEND_PATH_TO_ADDRESS",
}

export type Backend = {
  rules?: BackendRule[]
}


type BaseBackendRule = {
  selector?: string
  address?: string
  deadline?: number
  minDeadline?: number
  operationDeadline?: number
  pathTranslation?: BackendRulePathTranslation
  protocol?: string
}

export type BackendRule = BaseBackendRule
  & OneOf<{ jwtAudience: string; disableAuth: boolean }>