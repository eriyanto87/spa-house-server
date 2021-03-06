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
    it(`responds with a 200 and an empty list`, () => {
      return supertest(app).get("/api/confirmation").expect(200, []);
    });
    context("Given no confirmation", () => {
      const testUser = helpers.makeUsersArray();
      const testTreatment = helpers.makeTreatmentsArray();

      beforeEach("insert confirmations", () => {
        return db.into("users").insert(testUser);
      });

      beforeEach("insert treatment", () => {
        return db.into("treatments").insert(testTreatment);
      });

      it("adds a new confirmation", () => {
        const newConfirmation = {
          user_id: 1,
          treatment_id: 1,
          comment: "hello",
          appointment_date: "2020-11-20T18:15:00.000Z",
        };
        return supertest(app)
          .post(`/api/confirmation`)
          .send(newConfirmation)
          .expect(201)
          .expect((res) => {
            expect(res.body.user_id).to.eql(newConfirmation.user_id);
            expect(res.body.treatment_id).to.eql(newConfirmation.treatment_id);
            expect(res.body.comment).to.eql(newConfirmation.comment);
            expect(res.body.appointment_date).to.eql(
              newConfirmation.appointment_date
            );
            expect(res.body).to.have.property("id");
          });
      });
    });
  });
});
