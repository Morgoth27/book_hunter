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
}`;

export const LOGIN = gql`
mutation login(password: String!, email: String!) {
    login(password: String!, email: String!) {
        user {
            _id
            username
            email
        }
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook(BookData: bookInput) {
    saveBook(BookData: bookInput) {
        _id
        username
        email
        savedBooks {
            bookId
            title
            authors
            link
            image
            description
        }
    }
}`;