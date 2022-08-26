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
    tech1_votes: Number
    tech2_votes: Number
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    tech: [Tech]
    matchup: [Matchup]
  }
`;

module.exports = typeDefs;
