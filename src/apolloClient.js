import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const HASURA_HTTP_LINK = new createHttpLink({
    uri: 'http://localhost:8081/v1/graphql',
  });

  /*
    const link = new WebSocketLink({
    uri: 'wss://localhost:8081/v1/graphql',
    options: {
      reconnect: true,
    },
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    hasuraWsLink,
    HASURA_HTTP_LINK
  );

  export const hasuraClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });

  
  
  */
  const clientHasura = new ApolloClient({
    uri: 'http://localhost:8081/v1/graphql',
    cache: new InMemoryCache(),
  });

  export default clientHasura
