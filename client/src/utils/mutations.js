import { gql } from "@apollo/client"

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}`;

export const LOGIN = gql`
mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
        user {
            _id
            email
        }
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($bookData: bookInput!) {
    saveBook(bookData: $bookData) {
        _id
        username
        email
        bookCount
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

export const DELETE_BOOK = gql`
mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
        }
    }
}
`
