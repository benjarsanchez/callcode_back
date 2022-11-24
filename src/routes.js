const Router = require('koa-router');
const jwt = require('koa-jwt');
const AuthMiddle = require('./middlewares/auth');
const auth = require('./routes/auth');
const ProtectedRoutes = require('./routes/protected');
const lineaproduccions = require('./routes/lineaproduccions');
const usuarios = require('./routes/usuarios');
const simulation = require('./routes/simulation');

const router = new Router();

router.use('/auth', auth.routes());
router.use('/lineaproduccions', AuthMiddle, lineaproduccions.routes());
router.use('/usuarios', AuthMiddle, usuarios.routes());
router.use('/usuarios', AuthMiddle, usuarios.routes());
router.use('/calculate_simulation', AuthMiddle, simulation.routes());

router.use(jwt({ secret: process.env.JWT_SECRET, key: 'tokendata' }));

router.use(ProtectedRoutes.routes());

module.exports = router;
