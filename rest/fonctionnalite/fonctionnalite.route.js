const router =  require('express').Router();

const action = require('./fonctionnalite.action');

router.get('/fonctionnalites', action.getAllFonctionnalites)
router.get('/typeCriteres', action.getAllTypeCritere)
router.get('/fonctionnalite/:id', action.getFonctionnalite)
router.get('/categories/all', action.getAllCategories)
router.get('/categories/:id', action.getCategory)
router.post('/fonctionnalite/add', action.createFonctionnalite)
router.post('/fonctionnalite/update', action.updateFonctionnalite)



module.exports = router;

