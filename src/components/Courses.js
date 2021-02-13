import React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';

// alt + num9 + num6 for `this`

const userQuery = gql`
    {
        tasks{
            data{
            id
            task
            user{
                id
                name
            }
            }
            paginatorInfo{
            total
            }
        }
    }


`;



export default function Courses() {
    return (
        <Query query={userQuery}>
            {({loading, error, data})=>{
                if(loading) return <p>Loading...</p>
                if(error) return <p>Error :(</p>

                return data.tasks.map((response)=>{
                    return(
                        <div>
                            Hello WOrld
                        </div>
                    )
                });
            }}
        </Query>

    );
}
