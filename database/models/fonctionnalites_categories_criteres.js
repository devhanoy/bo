/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fonctionnalites_categories_criteres', {
    fonc_cat_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fonctionnalites_categories',
        key: 'fonc_cat_id'
      }
    },
    fonc_elem_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fonctionnalites_element',
        key: 'fonc_elem_id'
      }
    }
  }, {
    tableName: 'fonctionnalites_categories_criteres',
    timestamps: false
  });
};
