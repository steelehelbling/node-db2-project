
exports.up = function(knex) {
 return knex.schema.createTable('cars', tbl =>{
     tbl.increments();
     tbl.text('VIN', 128)
     tbl.text('make')
     tbl.text('model')
     tbl.text('mileage')
 }) 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
