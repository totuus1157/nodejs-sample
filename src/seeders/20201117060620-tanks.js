'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tanks', [{
      name: 'Ⅳ号戦車D型',
      crew: 5,
      length: 5.92,
      weight: 20.0,
      speed: 40.0,
      team: 'あんこう',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '38(t)戦車B/C型',
      crew: 4,
      length: 4.61,
      weight: 9.5,
      speed: 42.0,
      team: 'カメさん',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '八九式中戦車甲型',
      crew: 4,
      length: 5.75,
      weight: 11.8,
      speed: 25.0,
      team: 'アヒルさん',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ⅲ号突撃砲F型',
      crew: 4,
      length: 6.31,
      weight: 21.6,
      speed: 40.0,
      team: 'カバさん',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'M3中戦車リー',
      crew: 6,
      length: 5.64,
      weight: 27.0,
      speed: 42.0,
      team: 'ウサギさん',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'B1bis',
      crew: 4,
      length: 6.38,
      weight: 32.0,
      speed: 27.6,
      team: 'カモさん',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ポルシェティーガー',
      crew: 5,
      length: 9.34,
      weight: 57.0,
      speed: 35.0,
      team: 'レオポンさん',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '三式中戦車(チヌ）',
      crew: 5,
      length: 6.5,
      weight: 18.8,
      speed: 38.8,
      team: 'アリクイさん',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tanks', null, {});
  }
};
