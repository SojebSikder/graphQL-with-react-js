import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Courses from './components/Courses'
import './App.css';

const client = new ApolloClient({
  url: "http://127.0.0.1:8000/graphql"
});

function App() {
  return (
      <ApolloProvider client={client}>
        <div>
          <Courses />
        </div>
        </ApolloProvider>
  );
}

export default App;
