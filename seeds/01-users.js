
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:'354', make:'blue', model:'model3', mileage:'300'},
        {VIN:'128', make:'red', model:'ford', mileage:'400'},
        {VIN:'975', make:'green', model:'cybertruck', mileage:'600'},
        {VIN:'112', make:'black', model:'mustang', mileage:'150'},

      ]);
    });
};
