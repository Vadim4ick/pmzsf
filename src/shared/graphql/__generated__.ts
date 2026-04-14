import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  Hash: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly news: ReadonlyArray<News>;
  readonly news_aggregated: ReadonlyArray<News_Aggregated>;
  readonly news_by_id: Maybe<News>;
  readonly news_by_version: Maybe<Version_News>;
  readonly regions: ReadonlyArray<Regions>;
  readonly regions_aggregated: ReadonlyArray<Regions_Aggregated>;
  readonly regions_by_id: Maybe<Regions>;
  readonly regions_by_version: Maybe<Version_Regions>;
  readonly representatives: ReadonlyArray<Representatives>;
  readonly representatives_aggregated: ReadonlyArray<Representatives_Aggregated>;
  readonly representatives_by_id: Maybe<Representatives>;
  readonly representatives_by_version: Maybe<Version_Representatives>;
};


export type QueryNewsArgs = {
  filter: InputMaybe<News_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNews_AggregatedArgs = {
  filter: InputMaybe<News_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNews_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryNews_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryRegionsArgs = {
  filter: InputMaybe<Regions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRegions_AggregatedArgs = {
  filter: InputMaybe<Regions_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRegions_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryRegions_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryRepresentativesArgs = {
  filter: InputMaybe<Representatives_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRepresentatives_AggregatedArgs = {
  filter: InputMaybe<Representatives_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRepresentatives_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryRepresentatives_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly directus_users_mutated: Maybe<Directus_Users_Mutated>;
  readonly news_mutated: Maybe<News_Mutated>;
  readonly regions_mutated: Maybe<Regions_Mutated>;
  readonly representatives_mutated: Maybe<Representatives_Mutated>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionNews_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionRegions_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionRepresentatives_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type Big_Int_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Boolean_Filter_Operators = {
  readonly _eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly _neq: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  readonly count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  readonly __typename?: 'count_functions';
  readonly count: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _gt: InputMaybe<Scalars['String']['input']>;
  readonly _gte: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _lt: InputMaybe<Scalars['String']['input']>;
  readonly _lte: InputMaybe<Scalars['String']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  readonly day: InputMaybe<Number_Filter_Operators>;
  readonly hour: InputMaybe<Number_Filter_Operators>;
  readonly minute: InputMaybe<Number_Filter_Operators>;
  readonly month: InputMaybe<Number_Filter_Operators>;
  readonly second: InputMaybe<Number_Filter_Operators>;
  readonly week: InputMaybe<Number_Filter_Operators>;
  readonly weekday: InputMaybe<Number_Filter_Operators>;
  readonly year: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  readonly __typename?: 'datetime_functions';
  readonly day: Maybe<Scalars['Int']['output']>;
  readonly hour: Maybe<Scalars['Int']['output']>;
  readonly minute: Maybe<Scalars['Int']['output']>;
  readonly month: Maybe<Scalars['Int']['output']>;
  readonly second: Maybe<Scalars['Int']['output']>;
  readonly week: Maybe<Scalars['Int']['output']>;
  readonly weekday: Maybe<Scalars['Int']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  readonly __typename?: 'directus_files';
  readonly charset: Maybe<Scalars['String']['output']>;
  readonly created_on: Maybe<Scalars['Date']['output']>;
  readonly created_on_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly duration: Maybe<Scalars['Int']['output']>;
  readonly embed: Maybe<Scalars['String']['output']>;
  readonly filename_disk: Maybe<Scalars['String']['output']>;
  readonly filename_download: Scalars['String']['output'];
  readonly filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly focal_point_x: Maybe<Scalars['Int']['output']>;
  readonly focal_point_y: Maybe<Scalars['Int']['output']>;
  readonly folder: Maybe<Scalars['ID']['output']>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly location: Maybe<Scalars['String']['output']>;
  readonly metadata: Maybe<Scalars['JSON']['output']>;
  readonly metadata_func: Maybe<Count_Functions>;
  readonly modified_by: Maybe<Directus_Users>;
  readonly modified_on: Maybe<Scalars['Date']['output']>;
  readonly modified_on_func: Maybe<Datetime_Functions>;
  readonly storage: Scalars['String']['output'];
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly tus_data: Maybe<Scalars['JSON']['output']>;
  readonly tus_data_func: Maybe<Count_Functions>;
  readonly tus_id: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly uploaded_by: Maybe<Directus_Users>;
  readonly uploaded_on: Maybe<Scalars['Date']['output']>;
  readonly uploaded_on_func: Maybe<Datetime_Functions>;
  readonly width: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesModified_ByArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly charset: InputMaybe<String_Filter_Operators>;
  readonly created_on: InputMaybe<Date_Filter_Operators>;
  readonly created_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly duration: InputMaybe<Number_Filter_Operators>;
  readonly embed: InputMaybe<String_Filter_Operators>;
  readonly filename_disk: InputMaybe<String_Filter_Operators>;
  readonly filename_download: InputMaybe<String_Filter_Operators>;
  readonly filesize: InputMaybe<Big_Int_Filter_Operators>;
  readonly focal_point_x: InputMaybe<Number_Filter_Operators>;
  readonly focal_point_y: InputMaybe<Number_Filter_Operators>;
  readonly folder: InputMaybe<Id_Filter_Operators>;
  readonly height: InputMaybe<Number_Filter_Operators>;
  readonly id: InputMaybe<Id_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly metadata: InputMaybe<String_Filter_Operators>;
  readonly metadata_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly modified_by: InputMaybe<Directus_Users_Filter>;
  readonly modified_on: InputMaybe<Date_Filter_Operators>;
  readonly modified_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly storage: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly tus_data: InputMaybe<String_Filter_Operators>;
  readonly tus_data_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly tus_id: InputMaybe<String_Filter_Operators>;
  readonly type: InputMaybe<String_Filter_Operators>;
  readonly uploaded_by: InputMaybe<Directus_Users_Filter>;
  readonly uploaded_on: InputMaybe<Date_Filter_Operators>;
  readonly uploaded_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly width: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  readonly __typename?: 'directus_files_mutated';
  readonly data: Maybe<Directus_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Users = {
  readonly __typename?: 'directus_users';
  readonly appearance: Maybe<Scalars['String']['output']>;
  readonly auth_data: Maybe<Scalars['JSON']['output']>;
  readonly auth_data_func: Maybe<Count_Functions>;
  readonly avatar: Maybe<Directus_Files>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly email_notifications: Maybe<Scalars['Boolean']['output']>;
  readonly external_identifier: Maybe<Scalars['String']['output']>;
  readonly first_name: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly language: Maybe<Scalars['String']['output']>;
  readonly last_access: Maybe<Scalars['Date']['output']>;
  readonly last_access_func: Maybe<Datetime_Functions>;
  readonly last_name: Maybe<Scalars['String']['output']>;
  readonly last_page: Maybe<Scalars['String']['output']>;
  readonly location: Maybe<Scalars['String']['output']>;
  readonly password: Maybe<Scalars['Hash']['output']>;
  readonly policies: Maybe<Scalars['String']['output']>;
  readonly policies_func: Maybe<Count_Functions>;
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<Scalars['ID']['output']>;
  readonly status: Maybe<Scalars['String']['output']>;
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly text_direction: Maybe<Scalars['String']['output']>;
  readonly tfa_secret: Maybe<Scalars['Hash']['output']>;
  readonly theme_dark: Maybe<Scalars['String']['output']>;
  readonly theme_dark_overrides: Maybe<Scalars['JSON']['output']>;
  readonly theme_dark_overrides_func: Maybe<Count_Functions>;
  readonly theme_light: Maybe<Scalars['String']['output']>;
  readonly theme_light_overrides: Maybe<Scalars['JSON']['output']>;
  readonly theme_light_overrides_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly token: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Users_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Users_Filter>>>;
  readonly appearance: InputMaybe<String_Filter_Operators>;
  readonly auth_data: InputMaybe<String_Filter_Operators>;
  readonly auth_data_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly avatar: InputMaybe<Directus_Files_Filter>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly email: InputMaybe<String_Filter_Operators>;
  readonly email_notifications: InputMaybe<Boolean_Filter_Operators>;
  readonly external_identifier: InputMaybe<String_Filter_Operators>;
  readonly first_name: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Id_Filter_Operators>;
  readonly language: InputMaybe<String_Filter_Operators>;
  readonly last_access: InputMaybe<Date_Filter_Operators>;
  readonly last_access_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly last_name: InputMaybe<String_Filter_Operators>;
  readonly last_page: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly password: InputMaybe<Hash_Filter_Operators>;
  readonly policies: InputMaybe<String_Filter_Operators>;
  readonly policies_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly provider: InputMaybe<String_Filter_Operators>;
  readonly role: InputMaybe<Id_Filter_Operators>;
  readonly status: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly text_direction: InputMaybe<String_Filter_Operators>;
  readonly tfa_secret: InputMaybe<Hash_Filter_Operators>;
  readonly theme_dark: InputMaybe<String_Filter_Operators>;
  readonly theme_dark_overrides: InputMaybe<String_Filter_Operators>;
  readonly theme_dark_overrides_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly theme_light: InputMaybe<String_Filter_Operators>;
  readonly theme_light_overrides: InputMaybe<String_Filter_Operators>;
  readonly theme_light_overrides_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly token: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  readonly __typename?: 'directus_users_mutated';
  readonly data: Maybe<Directus_Users>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Id_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars['ID']['input']>;
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _ends_with: InputMaybe<Scalars['ID']['input']>;
  readonly _eq: InputMaybe<Scalars['ID']['input']>;
  readonly _icontains: InputMaybe<Scalars['ID']['input']>;
  readonly _iends_with: InputMaybe<Scalars['ID']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly _istarts_with: InputMaybe<Scalars['ID']['input']>;
  readonly _ncontains: InputMaybe<Scalars['ID']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nends_with: InputMaybe<Scalars['ID']['input']>;
  readonly _neq: InputMaybe<Scalars['ID']['input']>;
  readonly _niends_with: InputMaybe<Scalars['ID']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly _nistarts_with: InputMaybe<Scalars['ID']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nstarts_with: InputMaybe<Scalars['ID']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
  readonly _starts_with: InputMaybe<Scalars['ID']['input']>;
};

export type News = {
  readonly __typename?: 'news';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly region: Maybe<Regions>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type NewsRegionArgs = {
  filter: InputMaybe<Regions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Aggregated = {
  readonly __typename?: 'news_aggregated';
  readonly avg: Maybe<News_Aggregated_Fields>;
  readonly avgDistinct: Maybe<News_Aggregated_Fields>;
  readonly count: Maybe<News_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<News_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<News_Aggregated_Fields>;
  readonly min: Maybe<News_Aggregated_Fields>;
  readonly sum: Maybe<News_Aggregated_Fields>;
  readonly sumDistinct: Maybe<News_Aggregated_Fields>;
};

export type News_Aggregated_Count = {
  readonly __typename?: 'news_aggregated_count';
  readonly date_created: Maybe<Scalars['Int']['output']>;
  readonly date_updated: Maybe<Scalars['Int']['output']>;
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly region: Maybe<Scalars['Int']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type News_Aggregated_Fields = {
  readonly __typename?: 'news_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly region: Maybe<Scalars['Float']['output']>;
  readonly sort: Maybe<Scalars['Float']['output']>;
};

export type News_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<News_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<News_Filter>>>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly region: InputMaybe<Regions_Filter>;
  readonly sort: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type News_Mutated = {
  readonly __typename?: 'news_mutated';
  readonly data: Maybe<News>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Regions = {
  readonly __typename?: 'regions';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Regions_Aggregated = {
  readonly __typename?: 'regions_aggregated';
  readonly avg: Maybe<Regions_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Regions_Aggregated_Fields>;
  readonly count: Maybe<Regions_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Regions_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Regions_Aggregated_Fields>;
  readonly min: Maybe<Regions_Aggregated_Fields>;
  readonly sum: Maybe<Regions_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Regions_Aggregated_Fields>;
};

export type Regions_Aggregated_Count = {
  readonly __typename?: 'regions_aggregated_count';
  readonly code: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type Regions_Aggregated_Fields = {
  readonly __typename?: 'regions_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly sort: Maybe<Scalars['Float']['output']>;
};

export type Regions_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Regions_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Regions_Filter>>>;
  readonly code: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly sort: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Regions_Mutated = {
  readonly __typename?: 'regions_mutated';
  readonly data: Maybe<Regions>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Representatives = {
  readonly __typename?: 'representatives';
  readonly fullName: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly photo: Maybe<Directus_Files>;
  readonly position: Maybe<Scalars['String']['output']>;
  readonly region: Maybe<Regions>;
  readonly sort: Maybe<Scalars['Int']['output']>;
};


export type RepresentativesPhotoArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type RepresentativesRegionArgs = {
  filter: InputMaybe<Regions_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Representatives_Aggregated = {
  readonly __typename?: 'representatives_aggregated';
  readonly avg: Maybe<Representatives_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Representatives_Aggregated_Fields>;
  readonly count: Maybe<Representatives_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Representatives_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Representatives_Aggregated_Fields>;
  readonly min: Maybe<Representatives_Aggregated_Fields>;
  readonly sum: Maybe<Representatives_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Representatives_Aggregated_Fields>;
};

export type Representatives_Aggregated_Count = {
  readonly __typename?: 'representatives_aggregated_count';
  readonly fullName: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly photo: Maybe<Scalars['Int']['output']>;
  readonly position: Maybe<Scalars['Int']['output']>;
  readonly region: Maybe<Scalars['Int']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
};

export type Representatives_Aggregated_Fields = {
  readonly __typename?: 'representatives_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly region: Maybe<Scalars['Float']['output']>;
  readonly sort: Maybe<Scalars['Float']['output']>;
};

export type Representatives_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Representatives_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Representatives_Filter>>>;
  readonly fullName: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly photo: InputMaybe<Directus_Files_Filter>;
  readonly position: InputMaybe<String_Filter_Operators>;
  readonly region: InputMaybe<Regions_Filter>;
  readonly sort: InputMaybe<Number_Filter_Operators>;
};

export type Representatives_Mutated = {
  readonly __typename?: 'representatives_mutated';
  readonly data: Maybe<Representatives>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars['String']['input']>;
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _ends_with: InputMaybe<Scalars['String']['input']>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _icontains: InputMaybe<Scalars['String']['input']>;
  readonly _iends_with: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _istarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _ncontains: InputMaybe<Scalars['String']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nends_with: InputMaybe<Scalars['String']['input']>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _niends_with: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nistarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nstarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
  readonly _starts_with: InputMaybe<Scalars['String']['input']>;
};

export type Version_News = {
  readonly __typename?: 'version_news';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly region: Maybe<Scalars['JSON']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Regions = {
  readonly __typename?: 'version_regions';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Representatives = {
  readonly __typename?: 'version_representatives';
  readonly fullName: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly photo: Maybe<Scalars['JSON']['output']>;
  readonly position: Maybe<Scalars['String']['output']>;
  readonly region: Maybe<Scalars['JSON']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
};

export type MediaFragmentFragment = { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string };

export type NewsFragmentFragment = { readonly __typename?: 'news', readonly id: string, readonly title: string, readonly description: string, readonly date_created: any, readonly date_updated: any, readonly region: { readonly __typename?: 'regions', readonly title: string, readonly id: string } };

export type RegionFragmentFragment = { readonly __typename?: 'regions', readonly id: string, readonly title: string, readonly code: string };

export type RepresentativesFragmentFragment = { readonly __typename?: 'representatives', readonly id: string, readonly fullName: string, readonly position: string, readonly photo: { readonly __typename?: 'directus_files', readonly id: string }, readonly region: { readonly __typename?: 'regions', readonly id: string, readonly title: string, readonly code: string } };

export type GetAllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNewsQuery = { readonly __typename?: 'Query', readonly news: ReadonlyArray<{ readonly __typename?: 'news', readonly id: string, readonly title: string, readonly description: string, readonly date_created: any, readonly date_updated: any, readonly region: { readonly __typename?: 'regions', readonly title: string, readonly id: string } }> };

export type GetNewsByRegionQueryVariables = Exact<{
  regionCode: Scalars['String']['input'];
}>;


export type GetNewsByRegionQuery = { readonly __typename?: 'Query', readonly news: ReadonlyArray<{ readonly __typename?: 'news', readonly id: string, readonly title: string, readonly description: string, readonly date_created: any, readonly date_updated: any, readonly region: { readonly __typename?: 'regions', readonly title: string, readonly id: string } }> };

export type GetAllRegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRegionsQuery = { readonly __typename?: 'Query', readonly regions: ReadonlyArray<{ readonly __typename?: 'regions', readonly id: string, readonly title: string, readonly code: string }> };

export type GetAllRepresentativesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRepresentativesQuery = { readonly __typename?: 'Query', readonly representatives: ReadonlyArray<{ readonly __typename?: 'representatives', readonly id: string, readonly fullName: string, readonly position: string, readonly photo: { readonly __typename?: 'directus_files', readonly id: string }, readonly region: { readonly __typename?: 'regions', readonly id: string, readonly title: string, readonly code: string } }> };

export type GetRepresentativesByRegionQueryVariables = Exact<{
  regionCode: Scalars['String']['input'];
}>;


export type GetRepresentativesByRegionQuery = { readonly __typename?: 'Query', readonly representatives: ReadonlyArray<{ readonly __typename?: 'representatives', readonly id: string, readonly fullName: string, readonly position: string, readonly photo: { readonly __typename?: 'directus_files', readonly id: string }, readonly region: { readonly __typename?: 'regions', readonly id: string, readonly title: string, readonly code: string } }> };

export const MediaFragmentFragmentDoc = gql`
    fragment MediaFragment on directus_files {
  id
  width
  height
  type
}
    `;
export const NewsFragmentFragmentDoc = gql`
    fragment NewsFragment on news {
  id
  title
  description
  region {
    title
    id
  }
  date_created
  date_updated
}
    `;
export const RegionFragmentFragmentDoc = gql`
    fragment RegionFragment on regions {
  id
  title
  code
}
    `;
export const RepresentativesFragmentFragmentDoc = gql`
    fragment RepresentativesFragment on representatives {
  id
  photo {
    id
  }
  fullName
  position
  region {
    ...RegionFragment
  }
}
    ${RegionFragmentFragmentDoc}`;
export const GetAllNewsDocument = gql`
    query GetAllNews {
  news {
    ...NewsFragment
  }
}
    ${NewsFragmentFragmentDoc}`;
export const GetNewsByRegionDocument = gql`
    query GetNewsByRegion($regionCode: String!) {
  news(filter: {region: {code: {_eq: $regionCode}}}, limit: 6) {
    ...NewsFragment
  }
}
    ${NewsFragmentFragmentDoc}`;
export const GetAllRegionsDocument = gql`
    query GetAllRegions {
  regions {
    ...RegionFragment
  }
}
    ${RegionFragmentFragmentDoc}`;
export const GetAllRepresentativesDocument = gql`
    query GetAllRepresentatives {
  representatives {
    ...RepresentativesFragment
  }
}
    ${RepresentativesFragmentFragmentDoc}`;
export const GetRepresentativesByRegionDocument = gql`
    query GetRepresentativesByRegion($regionCode: String!) {
  representatives(filter: {region: {code: {_eq: $regionCode}}}) {
    ...RepresentativesFragment
  }
}
    ${RepresentativesFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllNews(variables?: GetAllNewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllNewsQuery>({ document: GetAllNewsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllNews', 'query', variables);
    },
    GetNewsByRegion(variables: GetNewsByRegionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetNewsByRegionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNewsByRegionQuery>({ document: GetNewsByRegionDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetNewsByRegion', 'query', variables);
    },
    GetAllRegions(variables?: GetAllRegionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllRegionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllRegionsQuery>({ document: GetAllRegionsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllRegions', 'query', variables);
    },
    GetAllRepresentatives(variables?: GetAllRepresentativesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllRepresentativesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllRepresentativesQuery>({ document: GetAllRepresentativesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllRepresentatives', 'query', variables);
    },
    GetRepresentativesByRegion(variables: GetRepresentativesByRegionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetRepresentativesByRegionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRepresentativesByRegionQuery>({ document: GetRepresentativesByRegionDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetRepresentativesByRegion', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;