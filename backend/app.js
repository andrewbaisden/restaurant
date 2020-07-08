const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(cors());

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.get('/', (req, res) => res.send('Home Route'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
