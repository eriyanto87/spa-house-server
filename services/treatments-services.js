const TreatmentsServices = {
  getAllTreatments(knex) {
    return knex.select("*").from("treatments");
  },
  insertTreatments(knex, newTreatment) {
    return knex
      .insert(newTreatment)
      .into("treatments")
      .returning("*")
      .then((treatment) => {
        return treatment[0];
      });
  },
  deleteTreatments(knex, id) {
    return knex.from("treatments").where({ id }).delete();
  },
  updateTreatments(knex, id, updatedTreatment) {
    return knex.from("treatments").where({ id }).update(updatedTreatments);
  },
};

module.exports = TreatmentsServices;
