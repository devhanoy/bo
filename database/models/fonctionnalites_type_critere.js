/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fonctionnalites_type_critere', {
    fonc_type_critere_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'fonctionnalites_type_critere',
    timestamps: false,
  });
};
