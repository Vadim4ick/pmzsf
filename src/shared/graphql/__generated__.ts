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
  readonly about: Maybe<About>;
  readonly about_by_version: Maybe<Version_About>;
  readonly committees: ReadonlyArray<Committees>;
  readonly committees_aggregated: ReadonlyArray<Committees_Aggregated>;
  readonly committees_by_id: Maybe<Committees>;
  readonly committees_by_version: Maybe<Version_Committees>;
  readonly document: ReadonlyArray<Document>;
  readonly document_aggregated: ReadonlyArray<Document_Aggregated>;
  readonly document_by_id: Maybe<Document>;
  readonly document_by_version: Maybe<Version_Document>;
  readonly document_document: ReadonlyArray<Document_Document>;
  readonly document_document_aggregated: ReadonlyArray<Document_Document_Aggregated>;
  readonly document_document_by_id: Maybe<Document_Document>;
  readonly document_document_by_version: Maybe<Version_Document_Document>;
  readonly documents: Maybe<Documents>;
  readonly documents_by_version: Maybe<Version_Documents>;
  readonly documents_document: ReadonlyArray<Documents_Document>;
  readonly documents_document_aggregated: ReadonlyArray<Documents_Document_Aggregated>;
  readonly documents_document_by_id: Maybe<Documents_Document>;
  readonly documents_document_by_version: Maybe<Version_Documents_Document>;
  readonly documents_files: ReadonlyArray<Documents_Files>;
  readonly documents_files_aggregated: ReadonlyArray<Documents_Files_Aggregated>;
  readonly documents_files_by_id: Maybe<Documents_Files>;
  readonly documents_files_by_version: Maybe<Version_Documents_Files>;
  readonly expert_advice: Maybe<Expert_Advice>;
  readonly expert_advice_by_version: Maybe<Version_Expert_Advice>;
  readonly hierarchy_members: ReadonlyArray<Hierarchy_Members>;
  readonly hierarchy_members_aggregated: ReadonlyArray<Hierarchy_Members_Aggregated>;
  readonly hierarchy_members_by_id: Maybe<Hierarchy_Members>;
  readonly hierarchy_members_by_version: Maybe<Version_Hierarchy_Members>;
  readonly home_page: Maybe<Home_Page>;
  readonly home_page_by_version: Maybe<Version_Home_Page>;
  readonly home_page_news: ReadonlyArray<Home_Page_News>;
  readonly home_page_news_aggregated: ReadonlyArray<Home_Page_News_Aggregated>;
  readonly home_page_news_by_id: Maybe<Home_Page_News>;
  readonly home_page_news_by_version: Maybe<Version_Home_Page_News>;
  readonly news: ReadonlyArray<News>;
  readonly news_aggregated: ReadonlyArray<News_Aggregated>;
  readonly news_by_id: Maybe<News>;
  readonly news_by_version: Maybe<Version_News>;
  readonly news_files: ReadonlyArray<News_Files>;
  readonly news_files_aggregated: ReadonlyArray<News_Files_Aggregated>;
  readonly news_files_by_id: Maybe<News_Files>;
  readonly news_files_by_version: Maybe<Version_News_Files>;
  readonly regions: ReadonlyArray<Regions>;
  readonly regions_aggregated: ReadonlyArray<Regions_Aggregated>;
  readonly regions_by_id: Maybe<Regions>;
  readonly regions_by_version: Maybe<Version_Regions>;
  readonly representatives: ReadonlyArray<Representatives>;
  readonly representatives_aggregated: ReadonlyArray<Representatives_Aggregated>;
  readonly representatives_by_id: Maybe<Representatives>;
  readonly representatives_by_version: Maybe<Version_Representatives>;
  readonly structure: Maybe<Structure>;
  readonly structure_by_version: Maybe<Version_Structure>;
  readonly veterans: ReadonlyArray<Veterans>;
  readonly veterans_aggregated: ReadonlyArray<Veterans_Aggregated>;
  readonly veterans_by_id: Maybe<Veterans>;
  readonly veterans_by_version: Maybe<Version_Veterans>;
};


export type QueryAboutArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAbout_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryCommitteesArgs = {
  filter: InputMaybe<Committees_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCommittees_AggregatedArgs = {
  filter: InputMaybe<Committees_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCommittees_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommittees_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDocumentArgs = {
  filter: InputMaybe<Document_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDocument_AggregatedArgs = {
  filter: InputMaybe<Document_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDocument_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocument_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDocument_DocumentArgs = {
  filter: InputMaybe<Document_Document_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDocument_Document_AggregatedArgs = {
  filter: InputMaybe<Document_Document_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDocument_Document_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocument_Document_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDocumentsArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocuments_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryDocuments_DocumentArgs = {
  filter: InputMaybe<Documents_Document_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDocuments_Document_AggregatedArgs = {
  filter: InputMaybe<Documents_Document_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDocuments_Document_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocuments_Document_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDocuments_FilesArgs = {
  filter: InputMaybe<Documents_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDocuments_Files_AggregatedArgs = {
  filter: InputMaybe<Documents_Files_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDocuments_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocuments_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryExpert_AdviceArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryExpert_Advice_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryHierarchy_MembersArgs = {
  filter: InputMaybe<Hierarchy_Members_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHierarchy_Members_AggregatedArgs = {
  filter: InputMaybe<Hierarchy_Members_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHierarchy_Members_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHierarchy_Members_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryHome_PageArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHome_Page_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryHome_Page_NewsArgs = {
  filter: InputMaybe<Home_Page_News_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHome_Page_News_AggregatedArgs = {
  filter: InputMaybe<Home_Page_News_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHome_Page_News_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHome_Page_News_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
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


export type QueryNews_FilesArgs = {
  filter: InputMaybe<News_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNews_Files_AggregatedArgs = {
  filter: InputMaybe<News_Files_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNews_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryNews_Files_By_VersionArgs = {
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


export type QueryStructureArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryStructure_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryVeteransArgs = {
  filter: InputMaybe<Veterans_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVeterans_AggregatedArgs = {
  filter: InputMaybe<Veterans_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVeterans_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryVeterans_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly about_mutated: Maybe<About_Mutated>;
  readonly committees_mutated: Maybe<Committees_Mutated>;
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly directus_users_mutated: Maybe<Directus_Users_Mutated>;
  readonly document_document_mutated: Maybe<Document_Document_Mutated>;
  readonly document_mutated: Maybe<Document_Mutated>;
  readonly documents_document_mutated: Maybe<Documents_Document_Mutated>;
  readonly documents_files_mutated: Maybe<Documents_Files_Mutated>;
  readonly documents_mutated: Maybe<Documents_Mutated>;
  readonly expert_advice_mutated: Maybe<Expert_Advice_Mutated>;
  readonly hierarchy_members_mutated: Maybe<Hierarchy_Members_Mutated>;
  readonly home_page_mutated: Maybe<Home_Page_Mutated>;
  readonly home_page_news_mutated: Maybe<Home_Page_News_Mutated>;
  readonly news_files_mutated: Maybe<News_Files_Mutated>;
  readonly news_mutated: Maybe<News_Mutated>;
  readonly regions_mutated: Maybe<Regions_Mutated>;
  readonly representatives_mutated: Maybe<Representatives_Mutated>;
  readonly structure_mutated: Maybe<Structure_Mutated>;
  readonly veterans_mutated: Maybe<Veterans_Mutated>;
};


export type SubscriptionAbout_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionCommittees_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDocument_Document_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDocument_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDocuments_Document_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDocuments_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDocuments_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionExpert_Advice_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHierarchy_Members_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHome_Page_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHome_Page_News_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionNews_Files_MutatedArgs = {
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


export type SubscriptionStructure_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionVeterans_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type About = {
  readonly __typename?: 'about';
  readonly about: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Directus_Files>;
};


export type AboutImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Mutated = {
  readonly __typename?: 'about_mutated';
  readonly data: Maybe<About>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
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

export type Committees = {
  readonly __typename?: 'committees';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly members: Maybe<ReadonlyArray<Maybe<Hierarchy_Members>>>;
  readonly members_func: Maybe<Count_Functions>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly status: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type CommitteesMembersArgs = {
  filter: InputMaybe<Hierarchy_Members_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Committees_Aggregated = {
  readonly __typename?: 'committees_aggregated';
  readonly avg: Maybe<Committees_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Committees_Aggregated_Fields>;
  readonly count: Maybe<Committees_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Committees_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Committees_Aggregated_Fields>;
  readonly min: Maybe<Committees_Aggregated_Fields>;
  readonly sum: Maybe<Committees_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Committees_Aggregated_Fields>;
};

export type Committees_Aggregated_Count = {
  readonly __typename?: 'committees_aggregated_count';
  readonly date_created: Maybe<Scalars['Int']['output']>;
  readonly date_updated: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly members: Maybe<Scalars['Int']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly status: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type Committees_Aggregated_Fields = {
  readonly __typename?: 'committees_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly sort: Maybe<Scalars['Float']['output']>;
};

export type Committees_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Committees_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Committees_Filter>>>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly members: InputMaybe<Hierarchy_Members_Quantifier_Filter>;
  readonly members_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly sort: InputMaybe<Number_Filter_Operators>;
  readonly status: InputMaybe<String_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Committees_Mutated = {
  readonly __typename?: 'committees_mutated';
  readonly data: Maybe<Committees>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
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
  readonly hierarchy_memberships: Maybe<ReadonlyArray<Maybe<Hierarchy_Members>>>;
  readonly hierarchy_memberships_func: Maybe<Count_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly language: Maybe<Scalars['String']['output']>;
  readonly last_access: Maybe<Scalars['Date']['output']>;
  readonly last_access_func: Maybe<Datetime_Functions>;
  readonly last_name: Maybe<Scalars['String']['output']>;
  readonly last_page: Maybe<Scalars['String']['output']>;
  readonly location: Maybe<Scalars['String']['output']>;
  readonly member: Maybe<Scalars['Boolean']['output']>;
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


export type Directus_UsersHierarchy_MembershipsArgs = {
  filter: InputMaybe<Hierarchy_Members_Filter>;
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
  readonly hierarchy_memberships: InputMaybe<Hierarchy_Members_Quantifier_Filter>;
  readonly hierarchy_memberships_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly id: InputMaybe<Id_Filter_Operators>;
  readonly language: InputMaybe<String_Filter_Operators>;
  readonly last_access: InputMaybe<Date_Filter_Operators>;
  readonly last_access_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly last_name: InputMaybe<String_Filter_Operators>;
  readonly last_page: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly member: InputMaybe<Boolean_Filter_Operators>;
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

export type Document = {
  readonly __typename?: 'document';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly file: Maybe<Directus_Files>;
  readonly id: Scalars['ID']['output'];
  readonly status: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type DocumentFileArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Document_Aggregated = {
  readonly __typename?: 'document_aggregated';
  readonly avg: Maybe<Document_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Document_Aggregated_Fields>;
  readonly count: Maybe<Document_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Document_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Document_Aggregated_Fields>;
  readonly min: Maybe<Document_Aggregated_Fields>;
  readonly sum: Maybe<Document_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Document_Aggregated_Fields>;
};

export type Document_Aggregated_Count = {
  readonly __typename?: 'document_aggregated_count';
  readonly date_created: Maybe<Scalars['Int']['output']>;
  readonly date_updated: Maybe<Scalars['Int']['output']>;
  readonly file: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly status: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type Document_Aggregated_Fields = {
  readonly __typename?: 'document_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Document_Document = {
  readonly __typename?: 'document_document';
  readonly document_id: Maybe<Document>;
  readonly id: Scalars['ID']['output'];
  readonly related_document_id: Maybe<Document>;
};


export type Document_DocumentDocument_IdArgs = {
  filter: InputMaybe<Document_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Document_DocumentRelated_Document_IdArgs = {
  filter: InputMaybe<Document_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Document_Document_Aggregated = {
  readonly __typename?: 'document_document_aggregated';
  readonly avg: Maybe<Document_Document_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Document_Document_Aggregated_Fields>;
  readonly count: Maybe<Document_Document_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Document_Document_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Document_Document_Aggregated_Fields>;
  readonly min: Maybe<Document_Document_Aggregated_Fields>;
  readonly sum: Maybe<Document_Document_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Document_Document_Aggregated_Fields>;
};

export type Document_Document_Aggregated_Count = {
  readonly __typename?: 'document_document_aggregated_count';
  readonly document_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly related_document_id: Maybe<Scalars['Int']['output']>;
};

export type Document_Document_Aggregated_Fields = {
  readonly __typename?: 'document_document_aggregated_fields';
  readonly document_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly related_document_id: Maybe<Scalars['Float']['output']>;
};

export type Document_Document_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Document_Document_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Document_Document_Filter>>>;
  readonly document_id: InputMaybe<Document_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly related_document_id: InputMaybe<Document_Filter>;
};

export type Document_Document_Mutated = {
  readonly __typename?: 'document_document_mutated';
  readonly data: Maybe<Document_Document>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Document_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Document_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Document_Filter>>>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly file: InputMaybe<Directus_Files_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly status: InputMaybe<String_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Document_Mutated = {
  readonly __typename?: 'document_mutated';
  readonly data: Maybe<Document>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Documents = {
  readonly __typename?: 'documents';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<ReadonlyArray<Maybe<Documents_Document>>>;
  readonly items_func: Maybe<Count_Functions>;
};


export type DocumentsItemsArgs = {
  filter: InputMaybe<Documents_Document_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Documents_Document = {
  readonly __typename?: 'documents_document';
  readonly document_id: Maybe<Document>;
  readonly documents_id: Maybe<Documents>;
  readonly id: Scalars['ID']['output'];
};


export type Documents_DocumentDocument_IdArgs = {
  filter: InputMaybe<Document_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Documents_DocumentDocuments_IdArgs = {
  filter: InputMaybe<Documents_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Documents_Document_Aggregated = {
  readonly __typename?: 'documents_document_aggregated';
  readonly avg: Maybe<Documents_Document_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Documents_Document_Aggregated_Fields>;
  readonly count: Maybe<Documents_Document_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Documents_Document_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Documents_Document_Aggregated_Fields>;
  readonly min: Maybe<Documents_Document_Aggregated_Fields>;
  readonly sum: Maybe<Documents_Document_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Documents_Document_Aggregated_Fields>;
};

export type Documents_Document_Aggregated_Count = {
  readonly __typename?: 'documents_document_aggregated_count';
  readonly document_id: Maybe<Scalars['Int']['output']>;
  readonly documents_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type Documents_Document_Aggregated_Fields = {
  readonly __typename?: 'documents_document_aggregated_fields';
  readonly document_id: Maybe<Scalars['Float']['output']>;
  readonly documents_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Documents_Document_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Documents_Document_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Documents_Document_Filter>>>;
  readonly document_id: InputMaybe<Document_Filter>;
  readonly documents_id: InputMaybe<Documents_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type Documents_Document_Mutated = {
  readonly __typename?: 'documents_document_mutated';
  readonly data: Maybe<Documents_Document>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Documents_Document_Quantifier_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Documents_Document_Filter>>>;
  readonly _none: InputMaybe<Documents_Document_Filter>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Documents_Document_Filter>>>;
  readonly _some: InputMaybe<Documents_Document_Filter>;
  readonly document_id: InputMaybe<Document_Filter>;
  readonly documents_id: InputMaybe<Documents_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type Documents_Files = {
  readonly __typename?: 'documents_files';
  readonly directus_files_id: Maybe<Directus_Files>;
  readonly documents_id: Maybe<Documents>;
  readonly id: Scalars['ID']['output'];
};


export type Documents_FilesDirectus_Files_IdArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Documents_FilesDocuments_IdArgs = {
  filter: InputMaybe<Documents_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Documents_Files_Aggregated = {
  readonly __typename?: 'documents_files_aggregated';
  readonly avg: Maybe<Documents_Files_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Documents_Files_Aggregated_Fields>;
  readonly count: Maybe<Documents_Files_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Documents_Files_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Documents_Files_Aggregated_Fields>;
  readonly min: Maybe<Documents_Files_Aggregated_Fields>;
  readonly sum: Maybe<Documents_Files_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Documents_Files_Aggregated_Fields>;
};

export type Documents_Files_Aggregated_Count = {
  readonly __typename?: 'documents_files_aggregated_count';
  readonly directus_files_id: Maybe<Scalars['Int']['output']>;
  readonly documents_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type Documents_Files_Aggregated_Fields = {
  readonly __typename?: 'documents_files_aggregated_fields';
  readonly documents_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Documents_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Documents_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Documents_Files_Filter>>>;
  readonly directus_files_id: InputMaybe<Directus_Files_Filter>;
  readonly documents_id: InputMaybe<Documents_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type Documents_Files_Mutated = {
  readonly __typename?: 'documents_files_mutated';
  readonly data: Maybe<Documents_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Documents_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Documents_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Documents_Filter>>>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly items: InputMaybe<Documents_Document_Quantifier_Filter>;
  readonly items_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Documents_Mutated = {
  readonly __typename?: 'documents_mutated';
  readonly data: Maybe<Documents>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Expert_Advice = {
  readonly __typename?: 'expert_advice';
  readonly id: Scalars['ID']['output'];
  readonly members: Maybe<ReadonlyArray<Maybe<Hierarchy_Members>>>;
  readonly members_func: Maybe<Count_Functions>;
};


export type Expert_AdviceMembersArgs = {
  filter: InputMaybe<Hierarchy_Members_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Expert_Advice_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Expert_Advice_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Expert_Advice_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly members: InputMaybe<Hierarchy_Members_Quantifier_Filter>;
  readonly members_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Expert_Advice_Mutated = {
  readonly __typename?: 'expert_advice_mutated';
  readonly data: Maybe<Expert_Advice>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Hierarchy_Members = {
  readonly __typename?: 'hierarchy_members';
  readonly committee: Maybe<Committees>;
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly expert_advice: Maybe<Expert_Advice>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<Scalars['String']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly structure: Maybe<Structure>;
  readonly user: Maybe<Directus_Users>;
};


export type Hierarchy_MembersCommitteeArgs = {
  filter: InputMaybe<Committees_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Hierarchy_MembersExpert_AdviceArgs = {
  filter: InputMaybe<Expert_Advice_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Hierarchy_MembersStructureArgs = {
  filter: InputMaybe<Structure_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Hierarchy_MembersUserArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Hierarchy_Members_Aggregated = {
  readonly __typename?: 'hierarchy_members_aggregated';
  readonly avg: Maybe<Hierarchy_Members_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Hierarchy_Members_Aggregated_Fields>;
  readonly count: Maybe<Hierarchy_Members_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Hierarchy_Members_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Hierarchy_Members_Aggregated_Fields>;
  readonly min: Maybe<Hierarchy_Members_Aggregated_Fields>;
  readonly sum: Maybe<Hierarchy_Members_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Hierarchy_Members_Aggregated_Fields>;
};

export type Hierarchy_Members_Aggregated_Count = {
  readonly __typename?: 'hierarchy_members_aggregated_count';
  readonly committee: Maybe<Scalars['Int']['output']>;
  readonly date_created: Maybe<Scalars['Int']['output']>;
  readonly date_updated: Maybe<Scalars['Int']['output']>;
  readonly expert_advice: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly role: Maybe<Scalars['Int']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly structure: Maybe<Scalars['Int']['output']>;
  readonly user: Maybe<Scalars['Int']['output']>;
};

export type Hierarchy_Members_Aggregated_Fields = {
  readonly __typename?: 'hierarchy_members_aggregated_fields';
  readonly committee: Maybe<Scalars['Float']['output']>;
  readonly expert_advice: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly sort: Maybe<Scalars['Float']['output']>;
  readonly structure: Maybe<Scalars['Float']['output']>;
};

export type Hierarchy_Members_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Hierarchy_Members_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Hierarchy_Members_Filter>>>;
  readonly committee: InputMaybe<Committees_Filter>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly expert_advice: InputMaybe<Expert_Advice_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly role: InputMaybe<String_Filter_Operators>;
  readonly sort: InputMaybe<Number_Filter_Operators>;
  readonly structure: InputMaybe<Structure_Filter>;
  readonly user: InputMaybe<Directus_Users_Filter>;
};

export type Hierarchy_Members_Mutated = {
  readonly __typename?: 'hierarchy_members_mutated';
  readonly data: Maybe<Hierarchy_Members>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Hierarchy_Members_Quantifier_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Hierarchy_Members_Filter>>>;
  readonly _none: InputMaybe<Hierarchy_Members_Filter>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Hierarchy_Members_Filter>>>;
  readonly _some: InputMaybe<Hierarchy_Members_Filter>;
  readonly committee: InputMaybe<Committees_Filter>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly expert_advice: InputMaybe<Expert_Advice_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly role: InputMaybe<String_Filter_Operators>;
  readonly sort: InputMaybe<Number_Filter_Operators>;
  readonly structure: InputMaybe<Structure_Filter>;
  readonly user: InputMaybe<Directus_Users_Filter>;
};

export type Home_Page = {
  readonly __typename?: 'home_page';
  readonly chairman_featured_news: Maybe<News>;
  readonly chairman_video: Maybe<Directus_Files>;
  readonly chamber_chairman: Maybe<Directus_Users>;
  readonly id: Scalars['ID']['output'];
  readonly popular_news: Maybe<ReadonlyArray<Maybe<Home_Page_News>>>;
  readonly popular_news_func: Maybe<Count_Functions>;
};


export type Home_PageChairman_Featured_NewsArgs = {
  filter: InputMaybe<News_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_PageChairman_VideoArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_PageChamber_ChairmanArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_PagePopular_NewsArgs = {
  filter: InputMaybe<Home_Page_News_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Home_Page_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_Filter>>>;
  readonly chairman_featured_news: InputMaybe<News_Filter>;
  readonly chairman_video: InputMaybe<Directus_Files_Filter>;
  readonly chamber_chairman: InputMaybe<Directus_Users_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly popular_news: InputMaybe<Home_Page_News_Quantifier_Filter>;
  readonly popular_news_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Home_Page_Mutated = {
  readonly __typename?: 'home_page_mutated';
  readonly data: Maybe<Home_Page>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Home_Page_News = {
  readonly __typename?: 'home_page_news';
  readonly home_page_id: Maybe<Home_Page>;
  readonly id: Scalars['ID']['output'];
  readonly news_id: Maybe<News>;
};


export type Home_Page_NewsHome_Page_IdArgs = {
  filter: InputMaybe<Home_Page_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_Page_NewsNews_IdArgs = {
  filter: InputMaybe<News_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Home_Page_News_Aggregated = {
  readonly __typename?: 'home_page_news_aggregated';
  readonly avg: Maybe<Home_Page_News_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Home_Page_News_Aggregated_Fields>;
  readonly count: Maybe<Home_Page_News_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Home_Page_News_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Home_Page_News_Aggregated_Fields>;
  readonly min: Maybe<Home_Page_News_Aggregated_Fields>;
  readonly sum: Maybe<Home_Page_News_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Home_Page_News_Aggregated_Fields>;
};

export type Home_Page_News_Aggregated_Count = {
  readonly __typename?: 'home_page_news_aggregated_count';
  readonly home_page_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly news_id: Maybe<Scalars['Int']['output']>;
};

export type Home_Page_News_Aggregated_Fields = {
  readonly __typename?: 'home_page_news_aggregated_fields';
  readonly home_page_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly news_id: Maybe<Scalars['Float']['output']>;
};

export type Home_Page_News_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_News_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_News_Filter>>>;
  readonly home_page_id: InputMaybe<Home_Page_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly news_id: InputMaybe<News_Filter>;
};

export type Home_Page_News_Mutated = {
  readonly __typename?: 'home_page_news_mutated';
  readonly data: Maybe<Home_Page_News>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Home_Page_News_Quantifier_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_News_Filter>>>;
  readonly _none: InputMaybe<Home_Page_News_Filter>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Home_Page_News_Filter>>>;
  readonly _some: InputMaybe<Home_Page_News_Filter>;
  readonly home_page_id: InputMaybe<Home_Page_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly news_id: InputMaybe<News_Filter>;
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
  readonly content: Maybe<Scalars['String']['output']>;
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly images: Maybe<ReadonlyArray<Maybe<News_Files>>>;
  readonly images_func: Maybe<Count_Functions>;
  readonly preview: Maybe<Directus_Files>;
  readonly region: Maybe<Regions>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type NewsImagesArgs = {
  filter: InputMaybe<News_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type NewsPreviewArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
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
  readonly content: Maybe<Scalars['Int']['output']>;
  readonly date_created: Maybe<Scalars['Int']['output']>;
  readonly date_updated: Maybe<Scalars['Int']['output']>;
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly images: Maybe<Scalars['Int']['output']>;
  readonly preview: Maybe<Scalars['Int']['output']>;
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

export type News_Files = {
  readonly __typename?: 'news_files';
  readonly directus_files_id: Maybe<Directus_Files>;
  readonly id: Scalars['ID']['output'];
  readonly news_id: Maybe<News>;
};


export type News_FilesDirectus_Files_IdArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type News_FilesNews_IdArgs = {
  filter: InputMaybe<News_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Files_Aggregated = {
  readonly __typename?: 'news_files_aggregated';
  readonly avg: Maybe<News_Files_Aggregated_Fields>;
  readonly avgDistinct: Maybe<News_Files_Aggregated_Fields>;
  readonly count: Maybe<News_Files_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<News_Files_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<News_Files_Aggregated_Fields>;
  readonly min: Maybe<News_Files_Aggregated_Fields>;
  readonly sum: Maybe<News_Files_Aggregated_Fields>;
  readonly sumDistinct: Maybe<News_Files_Aggregated_Fields>;
};

export type News_Files_Aggregated_Count = {
  readonly __typename?: 'news_files_aggregated_count';
  readonly directus_files_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly news_id: Maybe<Scalars['Int']['output']>;
};

export type News_Files_Aggregated_Fields = {
  readonly __typename?: 'news_files_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly news_id: Maybe<Scalars['Float']['output']>;
};

export type News_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<News_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<News_Files_Filter>>>;
  readonly directus_files_id: InputMaybe<Directus_Files_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly news_id: InputMaybe<News_Filter>;
};

export type News_Files_Mutated = {
  readonly __typename?: 'news_files_mutated';
  readonly data: Maybe<News_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type News_Files_Quantifier_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<News_Files_Filter>>>;
  readonly _none: InputMaybe<News_Files_Filter>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<News_Files_Filter>>>;
  readonly _some: InputMaybe<News_Files_Filter>;
  readonly directus_files_id: InputMaybe<Directus_Files_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly news_id: InputMaybe<News_Filter>;
};

export type News_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<News_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<News_Filter>>>;
  readonly content: InputMaybe<String_Filter_Operators>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly images: InputMaybe<News_Files_Quantifier_Filter>;
  readonly images_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly preview: InputMaybe<Directus_Files_Filter>;
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

export type Structure = {
  readonly __typename?: 'structure';
  readonly id: Scalars['ID']['output'];
  readonly members: Maybe<ReadonlyArray<Maybe<Hierarchy_Members>>>;
  readonly members_func: Maybe<Count_Functions>;
};


export type StructureMembersArgs = {
  filter: InputMaybe<Hierarchy_Members_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Structure_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Structure_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Structure_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly members: InputMaybe<Hierarchy_Members_Quantifier_Filter>;
  readonly members_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Structure_Mutated = {
  readonly __typename?: 'structure_mutated';
  readonly data: Maybe<Structure>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Version_About = {
  readonly __typename?: 'version_about';
  readonly about: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Scalars['JSON']['output']>;
};

export type Version_Committees = {
  readonly __typename?: 'version_committees';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly members: Maybe<Scalars['JSON']['output']>;
  readonly members_func: Maybe<Count_Functions>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly status: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Document = {
  readonly __typename?: 'version_document';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly file: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly status: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Document_Document = {
  readonly __typename?: 'version_document_document';
  readonly document_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly related_document_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_Documents = {
  readonly __typename?: 'version_documents';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly items: Maybe<Scalars['JSON']['output']>;
  readonly items_func: Maybe<Count_Functions>;
};

export type Version_Documents_Document = {
  readonly __typename?: 'version_documents_document';
  readonly document_id: Maybe<Scalars['JSON']['output']>;
  readonly documents_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_Documents_Files = {
  readonly __typename?: 'version_documents_files';
  readonly directus_files_id: Maybe<Scalars['JSON']['output']>;
  readonly documents_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_Expert_Advice = {
  readonly __typename?: 'version_expert_advice';
  readonly id: Scalars['ID']['output'];
  readonly members: Maybe<Scalars['JSON']['output']>;
  readonly members_func: Maybe<Count_Functions>;
};

export type Version_Hierarchy_Members = {
  readonly __typename?: 'version_hierarchy_members';
  readonly committee: Maybe<Scalars['JSON']['output']>;
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly expert_advice: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<Scalars['String']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly structure: Maybe<Scalars['JSON']['output']>;
  readonly user: Maybe<Scalars['JSON']['output']>;
};

export type Version_Home_Page = {
  readonly __typename?: 'version_home_page';
  readonly chairman_featured_news: Maybe<Scalars['JSON']['output']>;
  readonly chairman_video: Maybe<Scalars['JSON']['output']>;
  readonly chamber_chairman: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly popular_news: Maybe<Scalars['JSON']['output']>;
  readonly popular_news_func: Maybe<Count_Functions>;
};

export type Version_Home_Page_News = {
  readonly __typename?: 'version_home_page_news';
  readonly home_page_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly news_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_News = {
  readonly __typename?: 'version_news';
  readonly content: Maybe<Scalars['String']['output']>;
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly images: Maybe<Scalars['JSON']['output']>;
  readonly images_func: Maybe<Count_Functions>;
  readonly preview: Maybe<Scalars['JSON']['output']>;
  readonly region: Maybe<Scalars['JSON']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_News_Files = {
  readonly __typename?: 'version_news_files';
  readonly directus_files_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly news_id: Maybe<Scalars['JSON']['output']>;
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

export type Version_Structure = {
  readonly __typename?: 'version_structure';
  readonly id: Scalars['ID']['output'];
  readonly members: Maybe<Scalars['JSON']['output']>;
  readonly members_func: Maybe<Count_Functions>;
};

export type Version_Veterans = {
  readonly __typename?: 'version_veterans';
  readonly birth_date: Maybe<Scalars['String']['output']>;
  readonly birth_place: Maybe<Scalars['String']['output']>;
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly first_name: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly last_name: Maybe<Scalars['String']['output']>;
  readonly middle_name: Maybe<Scalars['String']['output']>;
  readonly photo: Maybe<Scalars['JSON']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly status: Maybe<Scalars['String']['output']>;
};

export type Veterans = {
  readonly __typename?: 'veterans';
  readonly birth_date: Maybe<Scalars['String']['output']>;
  readonly birth_place: Maybe<Scalars['String']['output']>;
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly date_updated: Maybe<Scalars['Date']['output']>;
  readonly date_updated_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly first_name: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly last_name: Maybe<Scalars['String']['output']>;
  readonly middle_name: Maybe<Scalars['String']['output']>;
  readonly photo: Maybe<Directus_Files>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly status: Maybe<Scalars['String']['output']>;
};


export type VeteransPhotoArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Veterans_Aggregated = {
  readonly __typename?: 'veterans_aggregated';
  readonly avg: Maybe<Veterans_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Veterans_Aggregated_Fields>;
  readonly count: Maybe<Veterans_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Veterans_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Veterans_Aggregated_Fields>;
  readonly min: Maybe<Veterans_Aggregated_Fields>;
  readonly sum: Maybe<Veterans_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Veterans_Aggregated_Fields>;
};

export type Veterans_Aggregated_Count = {
  readonly __typename?: 'veterans_aggregated_count';
  readonly birth_date: Maybe<Scalars['Int']['output']>;
  readonly birth_place: Maybe<Scalars['Int']['output']>;
  readonly date_created: Maybe<Scalars['Int']['output']>;
  readonly date_updated: Maybe<Scalars['Int']['output']>;
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly first_name: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly last_name: Maybe<Scalars['Int']['output']>;
  readonly middle_name: Maybe<Scalars['Int']['output']>;
  readonly photo: Maybe<Scalars['Int']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
  readonly status: Maybe<Scalars['Int']['output']>;
};

export type Veterans_Aggregated_Fields = {
  readonly __typename?: 'veterans_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly sort: Maybe<Scalars['Float']['output']>;
};

export type Veterans_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Veterans_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Veterans_Filter>>>;
  readonly birth_date: InputMaybe<String_Filter_Operators>;
  readonly birth_place: InputMaybe<String_Filter_Operators>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly first_name: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly last_name: InputMaybe<String_Filter_Operators>;
  readonly middle_name: InputMaybe<String_Filter_Operators>;
  readonly photo: InputMaybe<Directus_Files_Filter>;
  readonly sort: InputMaybe<Number_Filter_Operators>;
  readonly status: InputMaybe<String_Filter_Operators>;
};

export type Veterans_Mutated = {
  readonly __typename?: 'veterans_mutated';
  readonly data: Maybe<Veterans>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type GetCommitteeByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCommitteeByIdQuery = { readonly __typename?: 'Query', readonly committees_by_id: { readonly __typename?: 'committees', readonly id: string, readonly title: string, readonly members: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly user: { readonly __typename?: 'directus_users', readonly id: string, readonly last_name: string, readonly email: string, readonly first_name: string, readonly member: boolean, readonly hierarchy_memberships: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly committee: { readonly __typename?: 'committees', readonly id: string, readonly title: string, readonly members: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly user: { readonly __typename?: 'directus_users', readonly first_name: string, readonly last_name: string } }> } }>, readonly avatar: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } }> } };

export type GetAllCommitteesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCommitteesQuery = { readonly __typename?: 'Query', readonly committees: ReadonlyArray<{ readonly __typename?: 'committees', readonly id: string, readonly title: string, readonly members: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly user: { readonly __typename?: 'directus_users', readonly id: string, readonly last_name: string, readonly email: string, readonly first_name: string, readonly member: boolean, readonly avatar: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } }> }> };

export type HierarchyMembersFragmentFragment = { readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly user: { readonly __typename?: 'directus_users', readonly id: string, readonly last_name: string, readonly email: string, readonly first_name: string, readonly member: boolean, readonly avatar: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } };

export type HierarchyMembersByIdFragmentFragment = { readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly user: { readonly __typename?: 'directus_users', readonly id: string, readonly last_name: string, readonly email: string, readonly first_name: string, readonly member: boolean, readonly hierarchy_memberships: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly committee: { readonly __typename?: 'committees', readonly id: string, readonly title: string, readonly members: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly user: { readonly __typename?: 'directus_users', readonly first_name: string, readonly last_name: string } }> } }>, readonly avatar: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } };

export type MediaFragmentFragment = { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string };

export type NewsFragmentFragment = { readonly __typename?: 'news', readonly id: string, readonly title: string, readonly description: string, readonly date_created: any, readonly date_updated: any, readonly region: { readonly __typename?: 'regions', readonly title: string, readonly id: string }, readonly preview: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } };

export type RegionFragmentFragment = { readonly __typename?: 'regions', readonly id: string, readonly title: string, readonly code: string };

export type RepresentativesFragmentFragment = { readonly __typename?: 'representatives', readonly id: string, readonly fullName: string, readonly position: string, readonly photo: { readonly __typename?: 'directus_files', readonly id: string }, readonly region: { readonly __typename?: 'regions', readonly id: string, readonly title: string, readonly code: string } };

export type UserFragmentFragment = { readonly __typename?: 'directus_users', readonly id: string, readonly last_name: string, readonly email: string, readonly first_name: string, readonly member: boolean, readonly avatar: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } };

export type VeteransFragmentFragment = { readonly __typename?: 'veterans', readonly id: string, readonly last_name: string, readonly first_name: string, readonly middle_name: string, readonly birth_date: string, readonly birth_place: string, readonly description: string, readonly photo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } };

export type GetAllNewsQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllNewsQuery = { readonly __typename?: 'Query', readonly news: ReadonlyArray<{ readonly __typename?: 'news', readonly id: string, readonly title: string, readonly description: string, readonly date_created: any, readonly date_updated: any, readonly region: { readonly __typename?: 'regions', readonly title: string, readonly id: string }, readonly preview: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } }>, readonly news_aggregated: ReadonlyArray<{ readonly __typename?: 'news_aggregated', readonly count: { readonly __typename?: 'news_aggregated_count', readonly id: number } }> };

export type GetNewsByRegionQueryVariables = Exact<{
  regionCode: Scalars['String']['input'];
}>;


export type GetNewsByRegionQuery = { readonly __typename?: 'Query', readonly news: ReadonlyArray<{ readonly __typename?: 'news', readonly id: string, readonly title: string, readonly date_created: any }> };

export type GetNewsByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetNewsByIdQuery = { readonly __typename?: 'Query', readonly news_by_id: { readonly __typename?: 'news', readonly content: string, readonly id: string, readonly title: string, readonly description: string, readonly date_created: any, readonly date_updated: any, readonly images: ReadonlyArray<{ readonly __typename?: 'news_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly type: string, readonly title: string, readonly id: string } }>, readonly region: { readonly __typename?: 'regions', readonly title: string, readonly id: string }, readonly preview: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } };

export type GetAboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPageQuery = { readonly __typename?: 'Query', readonly about: { readonly __typename?: 'about', readonly about: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } };

export type GetDocumentsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDocumentsPageQuery = { readonly __typename?: 'Query', readonly documents: { readonly __typename?: 'documents', readonly items: ReadonlyArray<{ readonly __typename?: 'documents_document', readonly document_id: { readonly __typename?: 'document', readonly title: string, readonly date_created: any, readonly file: { readonly __typename?: 'directus_files', readonly type: string, readonly title: string, readonly id: string } } }> } };

export type GetExpertAdvicePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExpertAdvicePageQuery = { readonly __typename?: 'Query', readonly expert_advice: { readonly __typename?: 'expert_advice', readonly members: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly user: { readonly __typename?: 'directus_users', readonly id: string, readonly last_name: string, readonly email: string, readonly first_name: string, readonly member: boolean, readonly hierarchy_memberships: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly committee: { readonly __typename?: 'committees', readonly id: string, readonly title: string, readonly members: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly user: { readonly __typename?: 'directus_users', readonly first_name: string, readonly last_name: string } }> } }>, readonly avatar: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } }> } };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { readonly __typename?: 'Query', readonly home_page: { readonly __typename?: 'home_page', readonly popular_news: ReadonlyArray<{ readonly __typename?: 'home_page_news', readonly id: string, readonly news_id: { readonly __typename?: 'news', readonly id: string, readonly title: string, readonly description: string, readonly date_created: any, readonly date_updated: any, readonly region: { readonly __typename?: 'regions', readonly title: string, readonly id: string }, readonly preview: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } }>, readonly chamber_chairman: { readonly __typename?: 'directus_users', readonly first_name: string, readonly last_name: string, readonly email: string, readonly avatar: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } }, readonly chairman_featured_news: { readonly __typename?: 'news', readonly id: string, readonly title: string, readonly date_created: any, readonly preview: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } }, readonly chairman_video: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } };

export type GetStructurePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStructurePageQuery = { readonly __typename?: 'Query', readonly structure: { readonly __typename?: 'structure', readonly members: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly user: { readonly __typename?: 'directus_users', readonly id: string, readonly last_name: string, readonly email: string, readonly first_name: string, readonly member: boolean, readonly hierarchy_memberships: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly role: string, readonly committee: { readonly __typename?: 'committees', readonly id: string, readonly title: string, readonly members: ReadonlyArray<{ readonly __typename?: 'hierarchy_members', readonly id: string, readonly user: { readonly __typename?: 'directus_users', readonly first_name: string, readonly last_name: string } }> } }>, readonly avatar: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } } }> } };

export type GetVeteransPageQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetVeteransPageQuery = { readonly __typename?: 'Query', readonly veterans: ReadonlyArray<{ readonly __typename?: 'veterans', readonly id: string, readonly last_name: string, readonly first_name: string, readonly middle_name: string, readonly birth_date: string, readonly birth_place: string, readonly description: string, readonly photo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } }>, readonly veterans_aggregated: ReadonlyArray<{ readonly __typename?: 'veterans_aggregated', readonly count: { readonly __typename?: 'veterans_aggregated_count', readonly id: number } }> };

export type GetVeteransByLetterQueryVariables = Exact<{
  letter: Scalars['String']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetVeteransByLetterQuery = { readonly __typename?: 'Query', readonly veterans: ReadonlyArray<{ readonly __typename?: 'veterans', readonly id: string, readonly last_name: string, readonly first_name: string, readonly middle_name: string, readonly birth_date: string, readonly birth_place: string, readonly description: string, readonly photo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly type: string } }>, readonly veterans_aggregated: ReadonlyArray<{ readonly __typename?: 'veterans_aggregated', readonly count: { readonly __typename?: 'veterans_aggregated_count', readonly id: number } }> };

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
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on directus_users {
  id
  last_name
  email
  avatar {
    ...MediaFragment
  }
  first_name
  member
}
    ${MediaFragmentFragmentDoc}`;
export const HierarchyMembersFragmentFragmentDoc = gql`
    fragment HierarchyMembersFragment on hierarchy_members {
  id
  role
  user {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const HierarchyMembersByIdFragmentFragmentDoc = gql`
    fragment HierarchyMembersByIdFragment on hierarchy_members {
  id
  role
  user {
    ...UserFragment
    hierarchy_memberships(filter: {committee: {id: {_nnull: true}}}) {
      id
      role
      committee {
        id
        title
        members(filter: {role: {_eq: "chairman"}}, limit: 1) {
          id
          user {
            first_name
            last_name
          }
        }
      }
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export const NewsFragmentFragmentDoc = gql`
    fragment NewsFragment on news {
  id
  title
  description
  region {
    title
    id
  }
  preview {
    ...MediaFragment
  }
  date_created
  date_updated
}
    ${MediaFragmentFragmentDoc}`;
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
export const VeteransFragmentFragmentDoc = gql`
    fragment VeteransFragment on veterans {
  id
  last_name
  first_name
  middle_name
  birth_date
  birth_place
  description
  photo {
    ...MediaFragment
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetCommitteeByIdDocument = gql`
    query GetCommitteeById($id: ID!) {
  committees_by_id(id: $id) {
    id
    title
    members(sort: ["sort"]) {
      ...HierarchyMembersByIdFragment
    }
  }
}
    ${HierarchyMembersByIdFragmentFragmentDoc}`;
export const GetAllCommitteesDocument = gql`
    query GetAllCommittees {
  committees(filter: {status: {_eq: "published"}}, sort: ["sort"]) {
    id
    title
    members(limit: 1, filter: {role: {_eq: "chairman"}}, sort: ["sort"]) {
      ...HierarchyMembersFragment
    }
  }
}
    ${HierarchyMembersFragmentFragmentDoc}`;
export const GetAllNewsDocument = gql`
    query GetAllNews($page: Int, $limit: Int) {
  news(page: $page, limit: $limit, sort: ["-date_created"]) {
    ...NewsFragment
  }
  news_aggregated {
    count {
      id
    }
  }
}
    ${NewsFragmentFragmentDoc}`;
export const GetNewsByRegionDocument = gql`
    query GetNewsByRegion($regionCode: String!) {
  news(filter: {region: {code: {_eq: $regionCode}}}, limit: 6) {
    id
    title
    date_created
  }
}
    `;
export const GetNewsByIdDocument = gql`
    query GetNewsById($id: ID!) {
  news_by_id(id: $id) {
    ...NewsFragment
    content
    images {
      directus_files_id {
        type
        title
        id
      }
    }
  }
}
    ${NewsFragmentFragmentDoc}`;
export const GetAboutPageDocument = gql`
    query GetAboutPage {
  about {
    about
    img {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetDocumentsPageDocument = gql`
    query GetDocumentsPage {
  documents {
    items(filter: {document_id: {status: {_eq: "published"}}}) {
      document_id {
        title
        date_created
        file {
          type
          title
          id
        }
      }
    }
  }
}
    `;
export const GetExpertAdvicePageDocument = gql`
    query GetExpertAdvicePage {
  expert_advice {
    members(sort: ["sort"]) {
      ...HierarchyMembersByIdFragment
    }
  }
}
    ${HierarchyMembersByIdFragmentFragmentDoc}`;
export const GetHomePageDocument = gql`
    query GetHomePage {
  home_page {
    popular_news {
      id
      news_id {
        ...NewsFragment
      }
    }
    chamber_chairman {
      first_name
      last_name
      email
      avatar {
        ...MediaFragment
      }
    }
    chairman_featured_news {
      id
      title
      preview {
        ...MediaFragment
      }
      date_created
    }
    chairman_video {
      ...MediaFragment
    }
  }
}
    ${NewsFragmentFragmentDoc}
${MediaFragmentFragmentDoc}`;
export const GetStructurePageDocument = gql`
    query GetStructurePage {
  structure {
    members(sort: ["sort"]) {
      ...HierarchyMembersByIdFragment
    }
  }
}
    ${HierarchyMembersByIdFragmentFragmentDoc}`;
export const GetVeteransPageDocument = gql`
    query GetVeteransPage($page: Int, $limit: Int) {
  veterans(
    filter: {status: {_eq: "published"}}
    sort: ["last_name", "first_name"]
    page: $page
    limit: $limit
  ) {
    ...VeteransFragment
  }
  veterans_aggregated(filter: {status: {_eq: "published"}}) {
    count {
      id
    }
  }
}
    ${VeteransFragmentFragmentDoc}`;
export const GetVeteransByLetterDocument = gql`
    query GetVeteransByLetter($letter: String!, $page: Int, $limit: Int) {
  veterans(
    filter: {status: {_eq: "published"}, last_name: {_starts_with: $letter}}
    sort: ["last_name", "first_name"]
    page: $page
    limit: $limit
  ) {
    ...VeteransFragment
  }
  veterans_aggregated(
    filter: {status: {_eq: "published"}, last_name: {_starts_with: $letter}}
  ) {
    count {
      id
    }
  }
}
    ${VeteransFragmentFragmentDoc}`;
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
    GetCommitteeById(variables: GetCommitteeByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetCommitteeByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCommitteeByIdQuery>({ document: GetCommitteeByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetCommitteeById', 'query', variables);
    },
    GetAllCommittees(variables?: GetAllCommitteesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllCommitteesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCommitteesQuery>({ document: GetAllCommitteesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllCommittees', 'query', variables);
    },
    GetAllNews(variables?: GetAllNewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllNewsQuery>({ document: GetAllNewsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllNews', 'query', variables);
    },
    GetNewsByRegion(variables: GetNewsByRegionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetNewsByRegionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNewsByRegionQuery>({ document: GetNewsByRegionDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetNewsByRegion', 'query', variables);
    },
    GetNewsById(variables: GetNewsByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetNewsByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNewsByIdQuery>({ document: GetNewsByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetNewsById', 'query', variables);
    },
    GetAboutPage(variables?: GetAboutPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAboutPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAboutPageQuery>({ document: GetAboutPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAboutPage', 'query', variables);
    },
    GetDocumentsPage(variables?: GetDocumentsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetDocumentsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDocumentsPageQuery>({ document: GetDocumentsPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetDocumentsPage', 'query', variables);
    },
    GetExpertAdvicePage(variables?: GetExpertAdvicePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetExpertAdvicePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExpertAdvicePageQuery>({ document: GetExpertAdvicePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetExpertAdvicePage', 'query', variables);
    },
    GetHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>({ document: GetHomePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetHomePage', 'query', variables);
    },
    GetStructurePage(variables?: GetStructurePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetStructurePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStructurePageQuery>({ document: GetStructurePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetStructurePage', 'query', variables);
    },
    GetVeteransPage(variables?: GetVeteransPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetVeteransPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVeteransPageQuery>({ document: GetVeteransPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVeteransPage', 'query', variables);
    },
    GetVeteransByLetter(variables: GetVeteransByLetterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetVeteransByLetterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVeteransByLetterQuery>({ document: GetVeteransByLetterDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVeteransByLetter', 'query', variables);
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