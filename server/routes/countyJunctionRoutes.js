const express = require('express');
const router = express.Router();
const countryJunctionController = require('../controllers/countryJunctionController');

router.get('/', countryJunctionController.getAllCountryJunctions);
router.post('/', countryJunctionController.createCountryJunction);
router.put('/:id', countryJunctionController.updateCountryJunction);
router.delete('/:id', countryJunctionController.deleteCountryJunction);

module.exports = router;
