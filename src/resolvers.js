const resolvers = {
  Query: {
    // returns an array of People that will be used to populate the homepage grid of our web client
    people: (_, { page }, { dataSources }) => {
      return dataSources.peopleAPI.people(page);
    },
    // get a person by name, for the track page
    person: (_, { name }, { dataSources }) => {
      return dataSources.peopleAPI.person(name);
    },
  },
};

module.exports = resolvers;
