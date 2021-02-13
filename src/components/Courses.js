import React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';

// alt + num9 + num6 for `this`

const userQuery = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;



export default function Courses() {
    return (
        <Query query={userQuery} />

    );
}
