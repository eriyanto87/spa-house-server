const UsersServices = {
  getAllUsers(knex) {
    return knex.select("*").from("users");
  },
};

module.exports = UsersServices;
