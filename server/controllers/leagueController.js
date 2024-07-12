const { League } = require('../models');

exports.getAllLeagues = async (req, res) => {
  console.log(League, 'aha burası');
  try {
    const leagues = await League.findAll();
    res.status(200).json(leagues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeagueById = async (req, res) => {
  try {
    const league = await League.findByPk(req.params.id);
    if (league) {
      res.status(200).json(league);
    } else {
      res.status(404).json({ error: 'League not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLeague = async (req, res) => {
  try {
    const newLeague = await League.create(req.body);
    res.status(201).json(newLeague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLeague = async (req, res) => {
  try {
    const league = await League.findByPk(req.params.id);
    if (league) {
      await league.update(req.body);
      res.status(200).json(league);
    } else {
      res.status(404).json({ error: 'League not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLeague = async (req, res) => {
  try {
    const league = await League.findByPk(req.params.id);
    if (league) {
      await league.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'League not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
