import { gql } from "@apollo/client"

export const CREATE_USER = gql`
mutation createUser(username: String!, email: String!, password: String!) {
    createUser(username: String!, email: String!, password: String!) {
        token
        user {
            _id
            username
            email
        }
    }
};


`