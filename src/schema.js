const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get an array of people"
    people(page: Int!): People!
    "Fetch a specific person, provided a person's name"
    person(name: String!): People
  }

  type People {
    count: Int!
    next: String
    previous: String
    results: [Person]
  }

  "A Person is a single individual in the people results"
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }
`;

module.exports = typeDefs;
