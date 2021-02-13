import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Courses from './components/Courses'
import './App.css';
import Apollo from "./classes/Apollo";



function App() {
  return (
    <ApolloProvider client={Apollo.client}>
      <div>
        <Courses />
      </div>
    </ApolloProvider>
  );
}

export default App;
