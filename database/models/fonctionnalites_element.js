/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fonctionnalites_element', {
    fonc_elem_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    is_exclusive: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    element_code: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fonc_type_critere_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'fonctionnalites_type_critere',
        key: 'fonc_type_critere_id'
      }
    }
  }, {
    tableName: 'fonctionnalites_element',
    timestamps: false,
    getterMethods: {
      id() {
        return this.fonc_elem_id
      },
      isExclusive() {
        return !!this.is_exclusive
      },
      code() {
        return this.element_code
      },
      typeCritere() {
        return this.fonc_type_critere_id
      }
    },
  
    setterMethods: {
      id(value) {
        this.setDataValue('fonc_elem_id', value);
      },
      isExclusive(value) {
        this.setDataValue('is_exclusive', value ? 1 : 0);
      },
      code(value) {
        this.setDataValue('element_code', value);
      },
      typeCritere(value) {
        this.setDataValue('fonc_type_critere_id', value);
      }
    }
  });
};
