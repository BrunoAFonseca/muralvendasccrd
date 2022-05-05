module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", {
        nome_produto: DataTypes.STRING(150),
        preco: DataTypes.STRING(150),
        descricao: DataTypes.STRING(150),
        imagem: DataTypes.STRING(150)
    }, {
        tableName: "produtos",
        timestamps: true,
        paranoid: true   
    });
    return Produto
}