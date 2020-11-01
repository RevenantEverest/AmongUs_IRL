require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res) => res.json({ message: "Imposter-API" }));
app.listen(PORT, () => console.log(chalk.hex("#00ff00")("[HTTP]") + " Imposter-API Ready"));