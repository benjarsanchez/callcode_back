const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.LineaProduccion, {
        foreignKey: 'id_producto',
      });
    }
  }

  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};
