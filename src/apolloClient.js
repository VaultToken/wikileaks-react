import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { WebSocketLink } from "@apollo/client/link/ws";

const HASURA_HTTP_LINK = new createHttpLink({
    uri: 'http://localhost:8081/v1/graphql',
  });

  const link = new WebSocketLink({
    uri: 'wss://localhost:8081/v1/graphql',
    options: {
      reconnect: true,
    },
  });
  const client = new ApolloClient({
    link,
    uri: 'http://localhost:8081/v1/graphql',
    cache: new InMemoryCache(),
  });