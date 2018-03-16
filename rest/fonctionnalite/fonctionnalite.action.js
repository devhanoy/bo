const service = require('./fonctionnalite.service')

module.exports = {
    getAllFonctionnalites,
    getAllTypeCritere,
    getFonctionnalite,
    getAllCategories,
    getCategory,
    createFonctionnalite,
    updateFonctionnalite
}

function getAllFonctionnalites(req, res, next) {
    service.getAllFonctionnalites()
        .then(result => {
            res.json(result)
        })
}

function getFonctionnalite(req, res, next) {
    const { id } = req.params;
    service.getFonctionnalite(id)
        .then(result => {
            res.json(result)
        })
}

function getAllTypeCritere(req, res, next) {
    service.getAllTypeCritere()
        .then(result => {
            res.json(result)
        })
}

function getAllCategories(req, res, next) {
    return service.getAllCategories()
    .then(result => {
        res.json(result)
    })
}

function getCategory(req, res, next) {
    const { id } = req.params;
    return service.getCategory(id)
        .then(result => {
            res.json(result)
        })
}

function createFonctionnalite(req, res, next) {
    const { id, categories } = req.body;
    return service.createFonctionnalite(id, categories )
        .then(result => {
            res.json(result)
        })
}


function updateFonctionnalite(req, res, next) {
    const { id, categories } = req.body;
    return service.updateFonctionnalite(id, categories )
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })
}
