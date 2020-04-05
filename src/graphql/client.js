import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://music-share-react.herokuapp.com/v1/graphql',
});

export default client;