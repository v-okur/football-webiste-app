const { CountryJunction } = require('../models');

exports.getAllCountryJunctions = async (req, res) => {
  console.log(CountryJunction, 'aha burası');
  try {
    const countryJunctions = await CountryJunction.findAll();
    res.status(200).json(countryJunctions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCountryJunctionById = async (req, res) => {
  try {
    const countryJunction = await CountryJunction.findByPk(req.params.id);
    if (countryJunction) {
      res.status(200).json(countryJunction);
    } else {
      res.status(404).json({ error: 'CountryJunction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCountryJunction = async (req, res) => {
  try {
    const newCountryJunction = await CountryJunction.create(req.body);
    res.status(201).json(newCountryJunction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCountryJunction = async (req, res) => {
  try {
    const countryJunction = await CountryJunction.findByPk(req.params.id);
    if (countryJunction) {
      await countryJunction.update(req.body);
      res.status(200).json(countryJunction);
    } else {
      res.status(404).json({ error: 'CountryJunction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCountryJunction = async (req, res) => {
  try {
    const countryJunction = await CountryJunction.findByPk(req.params.id);
    if (countryJunction) {
      await countryJunction.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'CountryJunction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
