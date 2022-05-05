module.exports = (sequelize, DataTypes) => {
    const Tipovenda = sequelize.define("Tipovenda", {
        alimentos_e_bebidas: DataTypes.STRING(150),
        servicos: DataTypes.STRING(150),
        revendas: DataTypes.STRING(150)
       
    }, {
    tableName: "tipovendas",
    timestamps: true,
    paranoid: true   
    
    });
    return Tipovenda
}