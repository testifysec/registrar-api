/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type SystemParameters = {
  rules?: SystemParameterRule[]
}

export type SystemParameterRule = {
  selector?: string
  parameters?: SystemParameter[]
}

export type SystemParameter = {
  name?: string
  httpHeader?: string
  urlQueryParameter?: string
}