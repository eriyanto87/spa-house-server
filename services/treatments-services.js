const TreatmentsServices = {
  getAllTreatments(knex) {
    return knex.select("*").from("treatments");
  },
};

module.exports = TreatmentsServices;
