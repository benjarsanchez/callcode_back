const Koa = require('koa');
const koaBody = require('koa-body');
const KoaLogger = require('koa-logger');
const cors = require('@koa/cors');
const session = require('koa-session');
const router = require('./routes');
const orm = require('../models');

const app = new Koa();

app.context.orm = orm;

app.use(cors(({ credentials: true })));

app.use(KoaLogger());
app.use(koaBody());
app.keys = [`${process.env.APP_KEY}`];
const CONFIG = {
  httpOnly: false,
};
app.use(session(CONFIG, app));

app.use(router.routes());

module.exports = app;
