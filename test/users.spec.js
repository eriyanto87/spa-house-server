const knex = require("knex");
const app = require("../src/app");
const helpers = require("./helpers");

describe("Users Endpoints", () => {
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

  describe("POST /api/users", () => {
    it("adds a new user", () => {
      const newUser = {
        id: 1,
        user_name: "Nes",
        user_number: "123",
        user_email: "test@yahoo.com",
        user_street: "123 happy st",
        user_city: "lala",
        user_state: "CA",
        user_zip: 92210,
      };
      return supertest(app)
        .post(`/api/users`)
        .send(newUser)
        .expect(201)
        .expect((res) => {
          expect(res.body.user_name).to.eql(newUser.user_name);
          expect(res.body.user_number).to.eql(newUser.user_number);
          expect(res.body.user_email).to.eql(newUser.user_email);
          expect(res.body.user_street).to.eql(newUser.user_street);
          expect(res.body.user_city).to.eql(newUser.user_city);
          expect(res.body.user_state).to.eql(newUser.user_state);
          expect(res.body.user_zip).to.eql(newUser.user_zip);
          expect(res.body).to.have.property("id");
        });
    });
  });
});
