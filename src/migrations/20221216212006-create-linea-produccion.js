/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LineaProduccions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      unidades: {
        type: Sequelize.INTEGER,
      },
      fecha: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      id_planificador: {
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' },
      },
      id_operario: {
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' },
      },
      id_producto: {
        type: Sequelize.INTEGER,
        references: { model: 'Productos', key: 'id' },
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LineaProduccions');
  },
};
