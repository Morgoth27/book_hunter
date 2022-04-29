const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Book {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Auth {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    # Add a field that will return an array of Class instances
    classes: [Class]
  }

  type Query {
    me: User
    classes: [Class]
    professors: [Professor]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
