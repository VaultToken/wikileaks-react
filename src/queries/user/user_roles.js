import gql from "graphql-tag";

export const GET_USER_ROLES = gql`
  query MyQuery {
    user_roles {
        role
    }
  }
`;