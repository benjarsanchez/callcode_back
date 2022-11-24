/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Usuarios', [
    {
      id: 1,
      nombre: 'Benja',
      contrasena_hash: '$2a$05$E/3KxgB2UsGqgeOG52S/AuexEs8kOauZN6alJbTWy1aaabDefxBIO',
      rol: 'admin',
      foto: 'https://i.imgur.com/4ZQZQ0F.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      nombre: 'Juan',
      contrasena_hash: '$2a$05$hylAxL98JUPlRMyYw0r0fugOVRkE3YczwIRKmXSEz.2wPEztC7b/u',
      rol: 'operario',
      foto: 'https://i.imgur.com/4ZQZQ0F.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface) => queryInterface.bulkDelete('Usuarios', null, {}),
};
