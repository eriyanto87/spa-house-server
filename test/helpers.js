function cleanTables(db) {
  return db.raw(
    `TRUNCATE
        confirmation, treatments, users;`
  );
}
function makeConfirmation() {
  return [
    {
      id: 1,
      user_id: 1,
      treatment_id: 1,
      comment: "hello",
      order_date: new Date().toLocaleString("en", { timeZone: "UTC" }),
      appointment_date: new Date().toLocaleString("en", { timeZone: "UTC" }),
    },
  ];
}

function makeTreatmentsArray() {
  return [
    {
      id: 1,
      name: "massage",
      length: 60,
      price: 30,
      display_name: "",
    },
  ];
}

function makeUsersArray() {
  return [
    {
      user_id: 1,
      user_name: "Nes",
      user_number: "123",
      user_email: "test@yahoo.com",
      user_street: "123 happy st",
      user_city: "lala",
      user_state: "CA",
      user_zip: 92210,
    },
  ];
}

module.exports = {
  cleanTables,
  makeUsersArray,
  makeTreatmentsArray,
  makeConfirmation,
};
