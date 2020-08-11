
exports.up = function(knex) {
  
    return knex.schema.createTable("cars", tbl => {
        
        tbl.increments('carID');

        tbl.string('VIN_Number', 17).notNullable().unique();

        tbl.string('Make', 30).notNullable();

        tbl.string('Model', 30).notNullable();

        tbl.integer('Year', 4).notNullable();

        tbl.integer('Mileage', 8).notNullable();

        tbl.string('Transmission', 15);

        tbl.string('Title_Status', 15);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
