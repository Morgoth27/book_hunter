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
    _id: ID
    title: String
    author: [String]
    link: String
    image: String
    description: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login
    createUser
    saveBook
    deleteBook
  }
`;

module.exports = typeDefs;
