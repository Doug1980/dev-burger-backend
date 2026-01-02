const { resolve } = require('node:path');
const express = require('express');

const upLoadPath = resolve(__dirname, '..', '..', 'uploads');
const fileRouteConfig = express.static(upLoadPath);

module.exports = fileRouteConfig;
