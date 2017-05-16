require('dotenv').config();

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV || 'development';

const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const path = require('path');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
