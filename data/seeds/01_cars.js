
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {carID: 1, VIN_Number: '12345678911234567', Make: 'Chevy', Model: 'Suburban', Year: 2004, Mileage: 170000, Transmission: 'Automatic', Title_Status: 'Clean'},
        {carID: 2, VIN_Number: '12345678900234567', Make: 'Chevy', Model: 'Sonic', Year: 2013, Mileage: 100000},
        {carID: 3, VIN_Number: '00345678911234567', Make: 'Chevy', Model: 'Cruize', Year: 2016, Mileage: 60000}      
      ]);
    });
};
