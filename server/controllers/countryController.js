const { Country } = require('../models');

exports.getAllCountries = async (req, res) => {
  console.log(Country, 'aha burası');
  try {
    const countries = await Country.findAll();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (country) {
      res.status(200).json(country);
    } else {
      res.status(404).json({ error: 'Country not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCountry = async (req, res) => {
  try {
    const newCountry = await Country.create(req.body);
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (country) {
      await country.update(req.body);
      res.status(200).json(country);
    } else {
      res.status(404).json({ error: 'Country not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (country) {
      await country.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Country not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
