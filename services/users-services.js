const UsersServices = {
  getAllUsers(knex) {
    return knex.select("*").from("users");
  },
  insertUser(knex, newUser) {
    return knex
      .insert(newUser)
      .into("users")
      .returning("*")
      .then((user) => {
        return user[0];
      });
  },
  deleteUser(knex, id) {
    return knex.from("users").where({ id }).delete();
  },
  updateTreatments(knex, id, updatedUser) {
    return knex.from("users").where({ id }).update(updatedUser);
  },
};

module.exports = UsersServices;
