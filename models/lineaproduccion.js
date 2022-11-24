const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LineaProduccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, {
        as: 'planificador',
        foreignKey: 'id_planificador',
      });
      this.belongsTo(models.Usuario, {
        as: 'operario',
        foreignKey: 'id_operario',
      });
      this.belongsTo(models.Producto, {
        as: 'producto',
        foreignKey: 'id_producto',
      });
    }
  }
  LineaProduccion.init({
    unidades: DataTypes.INTEGER,
    fecha: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'LineaProduccion',
  });
  return LineaProduccion;
};
