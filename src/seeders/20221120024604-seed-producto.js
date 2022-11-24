/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Productos', [
    {
      id: 1,
      nombre: 'Cigarro',
      precio: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      nombre: 'Puro',
      precio: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      nombre: 'Cigarro de palo',
      precio: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Productos', null, {}),
};
