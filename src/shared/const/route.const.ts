export const getRouteHome = () => "/";
export const getRouteNews = () => "/news";
export const getRouteAbout = () => "/about";
export const getRouteStructure = () => "/structure";
export const getRouteDocuments = () => "/documents";
export const getRouteContacts = () => "/contacts";
export const getRouteMedia = () => "/media";
export const getRouteExpertAdvice = () => "/expert-advice";
export const getRouteCommittees = () => "/committees";
export const getRouteCommitteesById = (id: string = ":id") =>
  `${getRouteCommittees()}/${id}`;
