const { Competition } = require('../models');

exports.getAllCompetitions = async (req, res) => {
  console.log(Competition, 'aha burası');
  try {
    const competitions = await Competition.findAll();
    res.status(200).json(competitions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCompetitionById = async (req, res) => {
  try {
    const competition = await Competition.findByPk(req.params.id);
    if (competition) {
      res.status(200).json(competition);
    } else {
      res.status(404).json({ error: 'Competition not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCompetition = async (req, res) => {
  try {
    const newCompetition = await Competition.create(req.body);
    res.status(201).json(newCompetition);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCompetition = async (req, res) => {
  try {
    const competition = await Competition.findByPk(req.params.id);
    if (competition) {
      await competition.update(req.body);
      res.status(200).json(competition);
    } else {
      res.status(404).json({ error: 'Competition not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCompetition = async (req, res) => {
  try {
    const competition = await Competition.findByPk(req.params.id);
    if (competition) {
      await competition.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Competition not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
