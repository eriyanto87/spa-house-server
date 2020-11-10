const CartServices = {
  getAll(knex) {
    return knex.select("*").from("cart");
  },
};

module.exports = CartServices;
