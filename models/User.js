const { Model, DataTypes } = require("sequelize");

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    //TABLE COLUMN DEFINITIONS GO HERE
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in imported sequelize connection (the direct connection to the database)

    sequelize,

    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing
    underscored: true,
    //model name stays lowercase in the database
    modelName: "user",
  }
);

module.exports = User;
