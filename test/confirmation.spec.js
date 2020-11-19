const knex = require("knex");
const app = require("../src/app");
const helpers = require("./helpers");

describe("Treatments Endpoint", () => {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("cleanup", () => helpers.cleanTables(db));

  afterEach("cleanup", () => helpers.cleanTables(db));

  describe("GET /api/confirmation", () => {
    context("Given no confirmation", () => {
      it(`responds with a 200 and an empty list`, () => {
        return supertest(app).get("/api/confirmation").expect(200, []);
      });
    });
    // context("Given there are confirmations in the database", () => {
    //   const test = helpers.makeConfirmation();

    //   beforeEach("insert confirmations", () => {
    //     return db.into("confirmation").insert(test);
    //   });

    //   it("gets the confirmation", () => {
    //     return supertest(app).get("/api/confirmation").expect(200, test);
    //   });
    // });
  });
});
