/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fonctionnalites_categories', {
    fonc_cat_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'fonctionnalites_categories',
    timestamps: false,
  });
};
