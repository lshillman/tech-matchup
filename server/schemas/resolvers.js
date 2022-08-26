const { Tech, Matchup } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    tech: async () => {
      // Get and return all documents from the tech collection
      return await Tech.find({});
    },
    matchup: async () => {
      return await Matchup.find({});
    }
  }
};

module.exports = resolvers;
