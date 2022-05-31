const { RESTDataSource } = require("apollo-datasource-rest");

class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    // The Star Wars API
    this.baseURL = "https://swapi.dev/api/";
  }

  people(page) {
    return this.get(`people/?page=${page}`);
  }

  person(name) {
    return this.get(`people/?search=${name}`);
  }
}

module.exports = PeopleAPI;
