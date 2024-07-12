const dotenv = require('dotenv');
const db = require('./models');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.json());

// Use routes
const competitionRoutes = require('./routes/competitionRoutes');
app.use('/api/competitions', competitionRoutes);

const countryRoutes = require('./routes/countryRoutes');
app.use('/api/countries', countryRoutes);

const leagueRoutes = require('./routes/leagueRoutes');
app.use('/api/leagues', leagueRoutes);

const playerRoutes = require('./routes/playerRoutes');
app.use('/api/players', playerRoutes);

const teamRoutes = require('./routes/teamRoutes');
app.use('/api/teams', teamRoutes);

const countryJunctionRoutes = require('./routes/countyJunctionRoutes');
app.use('/api/country-junctions', countryJunctionRoutes);

const tierRoutes = require('./routes/tierRoutes');
app.use('/api/tiers', tierRoutes);

db.sequelize.sync({ force: true, alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

module.exports = app;
// Middleware'ler, rotalar vs. ekleyin
