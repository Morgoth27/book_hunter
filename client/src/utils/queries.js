import { gql } from "@apollo/client"

export const ME = gql`
query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        image
        link
        bookId
        description
        title
      }
    }
}`;

export const ALL_USERS = gql`
query users {
    user {
        username
        savedBooks
    }
}`