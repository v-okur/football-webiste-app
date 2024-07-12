const express = require('express');
const router = express.Router();
const tierController = require('../controllers/tierController');

router.get('/', tierController.getAllTiers);
router.get('/:id', tierController.getTierById);
router.post('/', tierController.createTier);
router.put('/:id', tierController.updateTier);
router.delete('/:id', tierController.deleteTier);

module.exports = router;
