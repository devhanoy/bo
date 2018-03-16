const sequelize = require('sequelize')
const Op = sequelize.Op

const Sequelize = require('../../database/init-database')

const {
    categories,
    catFonctionnalites,
    criteres,
    element,
    fonctionnalites,
    typeCriteres
} = require('../../database')



module.exports = {
    getAllFonctionnalites,
    getFonctionnalite,
    getAllTypeCritere,
    getCategory,
    getAllCategories,
    createFonctionnalite,
    updateFonctionnalite
}

function getAllFonctionnalites() {
    return fonctionnalites.findAll()
        .then(fonctionnalites => fonctionnalites.map(f => f.fonc_fonctionnalites_id))
}

function getFonctionnalite(name) {
    return fonctionnalites.findById(name, {
        include: [{
            model: catFonctionnalites,
            as: 'categories'
        }]
    })
    .then(({id, categories}) => ({
        id,
        categories: categories.map(c => c.categorie)
    }))
}

function getAllTypeCritere() {
    return typeCriteres.findAll()
        .then(fonctionnalites => fonctionnalites.map(f => f.fonc_type_critere_id))    
}

function getAllCategories() {
    return categories.findAll();
}

function getCategory(name) {
    return categories.findById(name, {
        include: [{
            model: criteres,
            include: [{
                model: element
            }]
        }]
    })
    .then(categorie => ({
        id: categorie.fonc_cat_id,
        criteres: categorie.fonctionnalites_categories_criteres.map(({ fonctionnalites_element: {id,
            isExclusive,  
            code,
            typeCritere} }) => ({id,
                isExclusive,  
                code,
                typeCritere})
    )})) 
}

function createFonctionnalite(name, ocategories) {
    const mCategories = ocategories.map(categorie => new catFonctionnalites({ categorie }))
    return fonctionnalites.create({
        id: name,
        categories: mCategories
    }, {
        include: [{
          association: fonctionnalites.categories,
        }]
      })
}

function updateFonctionnalite(fonctionnalite, ocategories) {
    return Sequelize.transaction()
        .then(transaction => updateFonctionnaliteInTransaction(fonctionnalite, ocategories, transaction))
}

function updateFonctionnaliteInTransaction(fonctionnalite, ocategories, transaction) {
    const w = new catFonctionnalites({
        fonctionnalite,
        categorie: {
            // [Op.notIn]: ocategories
            [Op.not] : null
        }
    })

    const newCats = ocategories.map(categorie => (new catFonctionnalites({
        fonctionnalite,
        categorie
    }).toJSON()))

    return catFonctionnalites.destroy({
        where: w.where()
    },
    {
        transaction
    })
    .then(() => catFonctionnalites.bulkCreate(newCats, {
        transaction
    }))
    .then(() => {
        transaction.commit();
        console.log('commited!');
        return getFonctionnalite(fonctionnalite)
    })
    .catch(err => {
        transaction.rollback();
        throw err
    })
}