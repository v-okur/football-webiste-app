const { Team } = require('../models');

exports.getAllTeams = async (req, res) => {
  console.log(Team, 'aha burası');
  try {
    const teams = await Team.findAll();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTeam = async (req, res) => {
  try {
    const newTeam = await Team.create(req.body);
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (team) {
      await team.update(req.body);
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (team) {
      await team.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
