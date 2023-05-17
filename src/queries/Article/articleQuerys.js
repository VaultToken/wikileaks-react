import gql from "graphql-tag";

export const SEARCH_GET_ARTICLES = gql`
query getArticles($searchQuery: String!) {
  Article(where: {Name: {_ilike: $searchQuery}, _and: {Active: {_eq: true}}}) {
    ArticleID
    ArticleContentID_
    Name
    CreatedBy
    CreatedAt
    UpdatedAt
  }
}
`;

