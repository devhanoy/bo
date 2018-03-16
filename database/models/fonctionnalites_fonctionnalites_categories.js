/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fonctionnalites_fonctionnalites_categories', {
    fonc_cat_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fonctionnalites_categories',
        key: 'fonc_cat_id'
      }
    },
    fonc_fonctionnalites_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fonctionnalites_fonctionnalites',
        key: 'fonc_fonctionnalites_id'
      }
    }
  }, {
    tableName: 'fonctionnalites_fonctionnalites_categories',
    timestamps: false,
    getterMethods: {
      categorie() {
        return this.fonc_cat_id
      },
      fonctionnalite() {
        return this.fonc_fonctionnalites_id
      }
    },
  
    setterMethods: {
      categorie(value) {
        this.setDataValue('fonc_cat_id', value);
      },
      fonctionnalite(value) {
        this.setDataValue('fonc_fonctionnalites_id', value);
      }
    }
  });
};
