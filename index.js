const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
app.use(logger('dev'));
app.use(bodyParser.json());