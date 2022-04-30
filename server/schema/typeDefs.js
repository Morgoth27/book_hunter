const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    title: String
    authors: [String]
    link: String
    image: String
    description: String
  }

  type Auth {
    token: ID
    user: User
  }

  input bookInput {
    bookId: ID
    title: String
    authors: [String]
    link: String
    image: String
    description: String
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(password: String!, email: String!): Auth
    saveBook(BookData: bookInput):User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
