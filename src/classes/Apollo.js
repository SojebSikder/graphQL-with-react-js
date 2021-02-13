import { ApolloClient, InMemoryCache } from '@apollo/client';
/**
 * Implement apollo client
 */
class Apollo{
    /**
     * Fetch client
     */
    client(){
        const client = new ApolloClient({
            uri: 'http://localhost:8000/graphql',
            cache: new InMemoryCache()
          });

          return client;
    }
}

export default new Apollo();