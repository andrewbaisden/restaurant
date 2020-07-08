const express = require('express');
const cors = require('cors');
const path = require('path');
const adminRoute = require('./routes/admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/', adminRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
