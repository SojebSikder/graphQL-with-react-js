// alt + num9 + num6 for `this`
import React from 'react'
import { gql, useQuery, ApolloClient, InMemoryCache } from '@apollo/client';
import Apollo from '../classes/Apollo';


const userQuery = gql`
    {
        tasks{
            data{
                task
            }
        }
    }
`;

export default function Courses() {

    const { loading, error, data } = useQuery(userQuery);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>

    return data.tasks.map(()=>{
        <div>
            Test
        </div>
    });
}
