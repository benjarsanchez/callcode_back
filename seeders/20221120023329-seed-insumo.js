/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Insumos', [
    {
      id: 1,
      nombre: 'Hoja de Tabaco',
      precio: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      nombre: 'Papelillos',
      precio: 10000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      nombre: 'Caja de Tabaco',
      precio: 100000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Insumos', null, {}),
};
