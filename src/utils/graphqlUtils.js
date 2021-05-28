import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const graph_query = ({ url, query }) => {
  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    mutate: {
      errorPolicy: 'ignore',
    },
  })
  try {
    return client
      .query({
        query: gql(query),
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error)
      })
  } catch (e) {
    console.log(e)
  }
}

export const graph_mutation = ({ url, query }) => {
  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    mutate: {
      errorPolicy: 'ignore',
    },
  })
  try {
    return client
      .mutate({
        mutation: gql(query),
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error)
      })
  } catch (e) {
    console.log(e)
  }
}
