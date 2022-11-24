/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('LineaProduccions', [
    {
      id: 1,
      unidades: 100,
      fecha: '2021-12-16',
      createdAt: new Date(),
      updatedAt: new Date(),
      id_planificador: 1,
      id_operario: 2,
      id_producto: 1,
    },
    {
      id: 2,
      unidades: 100,
      fecha: '2021-12-16',
      createdAt: new Date(),
      updatedAt: new Date(),
      id_planificador: 1,
      id_operario: 2,
      id_producto: 2,
    },
    {
      id: 3,
      unidades: 100,
      fecha: '2021-12-16',
      createdAt: new Date(),
      updatedAt: new Date(),
      id_planificador: 1,
      id_operario: 2,
      id_producto: 3,
    },
    {
      id: 4,
      unidades: 100,
      fecha: '2021-12-16',
      createdAt: new Date(),
      updatedAt: new Date(),
      id_planificador: 2,
      id_operario: 1,
      id_producto: 1,
    },
  ]),

  down: (queryInterface) => queryInterface.bulkDelete('LineaProduccions', null, {}),
};
