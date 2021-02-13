import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import './App.css';

const client = new ApolloClient({
  url: "http://127.0.0.1:8000/graphql"
});

function App() {
  return (
      <ApolloProvider client={client}>
        <h2>My first Apollo React Application</h2>
        </ApolloProvider>
  );
}

export default App;
