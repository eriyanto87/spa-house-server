const ConfirmationServices = {
  getAll(knex) {
    return knex.select("*").from("confirmation");
  },
  insertConfirmation(knex, newConfirmation) {
    return knex
      .insert(newConfirmation)
      .into("confirmation")
      .returning("*")
      .then((c) => {
        return c[0];
      });
  },
  deleteConfirmation(knex, id) {
    return knex.from("confirmation").where({ id }).delete();
  },
  updateConfirmation(knex, id, updatedConfirmation) {
    return knex.from("confirmation").where({ id }).update(updatedConfirmation);
  },
};

module.exports = ConfirmationServices;
