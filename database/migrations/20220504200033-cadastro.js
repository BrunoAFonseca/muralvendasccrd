'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false
  },
  sobrenome:{
    type: Sequelize.STRING,
    allowNull: false
  },
  nascimento:{
    type: Sequelize.DATE,
    allowNull: false
  },
  cpf:{
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  empresa:{
    type: Sequelize.STRING,
    allowNull: true
  },
  bloco:{
    type: Sequelize.STRING,
    allowNull: false
  },
  apartamento:{
    type: Sequelize.STRING,
    allowNull: false
  },
  interfone:{
    type: Sequelize.STRING,
    allowNull: false
  },
  horario_atendimento:{
    type: Sequelize.STRING,
    allowNull: false
  },
  senha:{
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
    await queryInterface.dropTable('usuarios');
  }
};
