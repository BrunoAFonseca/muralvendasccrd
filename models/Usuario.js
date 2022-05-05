module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        nome: DataTypes.STRING(150),
        sobrenome: DataTypes.STRING(150),
        nascimento: DataTypes.DATE,
        cpf: DataTypes.STRING(11),
        telefone: DataTypes.STRING(13),
        email: DataTypes.STRING(150),
        empresa: DataTypes.STRING(150),
        bloco: DataTypes.STRING(2),
        apartamento: DataTypes.STRING(2),
        interfone: DataTypes.STRING(3),
        horario_atendimento: DataTypes.STRING(15),
        senha: DataTypes.STRING(250)
    }, {
    tableName: "usuarios",
    timestamps: true,
    paranoid: true   
    
    });
    return Usuario
}