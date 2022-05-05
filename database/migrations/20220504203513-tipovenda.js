'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tipovenda', { 
      
  alimentos_e_bebidas:{
    type: Sequelize.STRING,
    allowNull: false
  },
  servicos:{
    type: Sequelize.STRING,
    allowNull: false
  },
  revendas:{
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt:{
    type: Sequelize.DATE,         
  },
  updatedAt:{
    type: Sequelize.DATE
  },
  deletedAt:{
    type: Sequelize.DATE
  }
 });
},


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tipovenda');
  }
};
