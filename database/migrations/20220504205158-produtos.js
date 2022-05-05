'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtoss', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
  },
  nome_produto:{
    type: Sequelize.STRING,
    allowNull: false
  },
  preco:{
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao:{
    type: Sequelize.STRING,
    allowNull: false
  },
  imagem:{
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
  },

 });
},
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtos');
  }
};
