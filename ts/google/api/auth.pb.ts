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
export type Authentication = {
  rules?: AuthenticationRule[]
  providers?: AuthProvider[]
}

export type AuthenticationRule = {
  selector?: string
  oauth?: OAuthRequirements
  allowWithoutCredential?: boolean
  requirements?: AuthRequirement[]
}


type BaseJwtLocation = {
  valuePrefix?: string
}

export type JwtLocation = BaseJwtLocation
  & OneOf<{ header: string; query: string }>

export type AuthProvider = {
  id?: string
  issuer?: string
  jwksUri?: string
  audiences?: string
  authorizationUrl?: string
  jwtLocations?: JwtLocation[]
}

export type OAuthRequirements = {
  canonicalScopes?: string
}

export type AuthRequirement = {
  providerId?: string
  audiences?: string
}