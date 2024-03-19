export interface ConfigType {
  nest: NestConfig;
  graphql: GraphqlConfig;
  jwt: JwtConfig;
}

export interface NestConfig {
  environment: string | undefined;
  port: number;
  clientDomain: string | undefined;
  databaseUrl: string | undefined;
  readOnlyDatabaseUrl: string | undefined;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean | undefined;
  schemaDestination: string | undefined;
  sortSchema: boolean | undefined;
}

export interface JwtConfig {
  secret: string;
  expiredTime: string;
  refreshSecret: string;
  refreshExpiredTime: string;
}
