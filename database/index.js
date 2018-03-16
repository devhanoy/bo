const Sequelize = require('sequelize');

const databaseInstance = require('./init-database');

const categories = require('./models/fonctionnalites_categories')(databaseInstance, Sequelize)
const criteres =  require('./models/fonctionnalites_categories_criteres')(databaseInstance, Sequelize)
const element =  require('./models/fonctionnalites_element')(databaseInstance, Sequelize)
const fonctionnalites =  require('./models/fonctionnalites_fonctionnalites')(databaseInstance, Sequelize)
const catFonctionnalites =  require('./models/fonctionnalites_fonctionnalites_categories')(databaseInstance, Sequelize)
const typeCriteres =  require('./models/fonctionnalites_type_critere')(databaseInstance, Sequelize)

 fonctionnalites.categories = fonctionnalites.hasMany(catFonctionnalites, { foreignKey: {
    name: 'fonc_fonctionnalites_id',
    allowNull: false
  },
  as: 'categories'
})

categories.hasMany(criteres, { foreignKey: {
    name: 'fonc_cat_id',
    allowNull: false
}})

criteres.belongsTo (element, { foreignKey: {
    name: 'fonc_elem_id',
    allowNull: false
}})


module.exports = {
    categories,
    criteres,
    element,
    fonctionnalites,
    catFonctionnalites,
    typeCriteres
}