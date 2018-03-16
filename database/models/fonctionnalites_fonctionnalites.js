/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fonctionnalites_fonctionnalites', {
    fonc_fonctionnalites_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'fonctionnalites_fonctionnalites',
    timestamps: false,
    getterMethods: {
      id() {
        return this.fonc_fonctionnalites_id
      }
    },
  
    setterMethods: {
      id(value) {
        this.setDataValue('fonc_fonctionnalites_id', value);
      },
    }
  });
};
