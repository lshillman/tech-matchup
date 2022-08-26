const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Class model
  type Tech {
    _id: ID
    name: String
  }

  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
  }


  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    tech: [Tech]
    matchup: [Matchup]
  }

  type Mutation {
    addMatchup(tech1: String!, tech2: String!): Matchup
    addVote(tech1_votes: Int!, tech2_votes: Int!): Matchup
  }
`;

module.exports = typeDefs;
