/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type Documentation = {
  summary?: string
  pages?: Page[]
  rules?: DocumentationRule[]
  documentationRootUrl?: string
  serviceRootUrl?: string
  overview?: string
}

export type DocumentationRule = {
  selector?: string
  description?: string
  deprecationDescription?: string
}

export type Page = {
  name?: string
  content?: string
  subpages?: Page[]
}