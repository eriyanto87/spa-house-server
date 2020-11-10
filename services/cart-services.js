const CartServices = {
  getAll(knex) {
    return knex.select("*").from("cart");
  },
  insertCart(knex, newCart) {
    return knex
      .insert(newCart)
      .into("cart")
      .returning("*")
      .then((cart) => {
        return cart[0];
      });
  },
  deleteCart(knex, id) {
    return knex.from("cart").where({ id }).delete();
  },
  updateCart(knex, id, updatedCart) {
    return knex.from("cart").where({ id }).update(updatedCart);
  },
};

module.exports = CartServices;
