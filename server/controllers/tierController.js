const { Tier } = require('../models');

exports.getAllTiers = async (req, res) => {
  console.log(Tier, 'aha burası');
  try {
    const tiers = await Tier.findAll();
    res.status(200).json(tiers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTierById = async (req, res) => {
  try {
    const tier = await Tier.findByPk(req.params.id);
    if (tier) {
      res.status(200).json(tier);
    } else {
      res.status(404).json({ error: 'Tier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTier = async (req, res) => {
  try {
    const newTier = await Tier.create(req.body);
    res.status(201).json(newTier);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTier = async (req, res) => {
  try {
    const tier = await Tier.findByPk(req.params.id);
    if (tier) {
      await tier.update(req.body);
      res.status(200).json(tier);
    } else {
      res.status(404).json({ error: 'Tier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTier = async (req, res) => {
  try {
    const tier = await Tier.findByPk(req.params.id);
    if (tier) {
      await tier.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Tier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
