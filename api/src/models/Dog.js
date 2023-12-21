const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      min_height: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      max_height: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      min_weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      max_weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      lifespan: {
        // max 20
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [2, 25],
        },
        image:{
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
