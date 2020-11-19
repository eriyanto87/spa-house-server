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

  describe("GET /api/treatments", () => {
    context(`Given no treatments`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app).get("/api/treatments").expect(200, []);
      });
    });

    context("Given there are treatments in the database", () => {
      const test = helpers.makeTreatmentsArray();

      beforeEach("insert treatments", () => {
        return db.into("treatments").insert(test);
      });

      it("gets the treatments", () => {
        return supertest(app).get("/api/treatments").expect(200, test);
      });
    });
  });
});
