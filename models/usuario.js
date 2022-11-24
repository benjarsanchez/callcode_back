const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Session, {
        foreignKey: 'id',
        //  revisar
      });
      this.hasMany(models.LineaProduccion, {
        foreignKey: 'id',
        // eliminar fila si se elimina usuario
        onDelete: 'SET DEFAULT',
      });
    }
  }

  Usuario.init({
    nombre: DataTypes.STRING,
    contrasena_hash: DataTypes.STRING,
    foto: DataTypes.STRING,
    rol: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
