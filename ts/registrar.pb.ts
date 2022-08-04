/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "base/fetch.pb"

export enum NodeType {
  TPM = "TPM",
  GCP = "GCP",
  AWS = "AWS",
  AZURE = "AZURE",
}

export enum WorkloadType {
  OCI = "OCI",
  BIN = "BIN",
}

export type RegisterNodeRequest = {
  jWT?: string
  nodeType?: NodeType
  selectors?: SelectorList
  nodeGroup?: string
}

export type RegisterWorkloadRequest = {
  jWT?: string
  workloadType?: WorkloadType
  selectors?: SelectorList
  nodeGroup?: string
  workloadName?: string
}

export type RegisterResponse = {
  spiffeID?: string
}

export type GetAccountRequest = {
  selectors?: SelectorList
  nodeType?: NodeType
}

export type GetAccountResponse = {
  account?: string
  nodeGroup?: string
}

export type Selector = {
  key?: string
  value?: string
}

export type SelectorList = {
  selectors?: Selector[]
}

export class Registrar {
  static RegisterNode(req: RegisterNodeRequest, initReq?: fm.InitReq): Promise<RegisterResponse> {
    return fm.fetchReq<RegisterNodeRequest, RegisterResponse>(`/v1/registernode`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RegisterWorkload(req: RegisterWorkloadRequest, initReq?: fm.InitReq): Promise<RegisterResponse> {
    return fm.fetchReq<RegisterWorkloadRequest, RegisterResponse>(`/v1/registerworkload`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetAccount(req: GetAccountRequest, initReq?: fm.InitReq): Promise<GetAccountResponse> {
    return fm.fetchReq<GetAccountRequest, GetAccountResponse>(`/v1/account?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
}