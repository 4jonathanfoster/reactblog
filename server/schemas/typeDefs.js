const { gql } = require('apollo-server-express');

const typeDefs = 
gql`
  type User {
    _id: ID!
    username: String
    email: String
    savedPosts: [Post]!
  }

  type Post {
    _id: ID!
    comments: [String]
    description: String
    title: String
  }

  type PostDB {
    _id: ID!
    comments: [String]
    description: String
    title: String
  }

  input PostInput {
    description: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
      me: User
      AllPosts: [Post]

  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePost(newPost : PostInput!): User
    savePostToDB(title : String!, description : String!): PostDB

  }
`;

module.exports = typeDefs;
