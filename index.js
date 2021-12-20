'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const positionRoutes = require('./routes/positionRoutes');
const tovarRoutes = require('./routes/tovarRoutes');
const clientRoutes = require('./routes/clientRoutes');
const rabotnikRoutes = require('./routes/rabotnikRoutes')
const buxgalteriyaRoutes = require('./routes/buxgalteriyaRoutes')
const chekRoutes = require('./routes/chekRoutes')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', positionRoutes.routes);
app.use('/api', tovarRoutes.routes);
app.use('/api', clientRoutes.routes);
app.use('/api', rabotnikRoutes.routes);
app.use('/api', buxgalteriyaRoutes.routes);
app.use('/api', chekRoutes.routes);

app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});