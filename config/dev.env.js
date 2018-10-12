'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const axios = require('axios')
const adminServer = axios.create({
  baseURL: process.env.ADMIN_SERVER,
})
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ADMIN_SERVER: '"/api/"',
})
