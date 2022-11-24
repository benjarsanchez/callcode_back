const Router = require('koa-router');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const router = new Router();

router.post('/login', async (ctx) => {
  try {
    const usuario = await ctx.orm.Usuario.findOne({
      where: { nombre: ctx.request.body.nombre },
      /* include: [
        { model: ctx.orm.LineaProduccion, attributes: ['id'] },
      ], */
      // add include to transfer data in the payload
    });
    if (usuario) {
      if (bcrypt.compare(ctx.request.body.password, usuario.contrasena_hash)) {
        const NewSession = await ctx.orm.Session.create({
          userid: usuario.id,
        });
        ctx.session.sessionid = NewSession.id;
        console.log(ctx.session.sessionid);
        const payload = { lineaproduccions: usuario.LineaProduccions };
        const token = JWT.sign(payload, `${process.env.JWT_SECRET}`);
        ctx.response.body = { token };
        ctx.status = 201;
      } else {
        console.log('Contraseña incorrecta');
        ctx.throw(401, 'Contraseña incorrecta');
      }
    } else {
      console.log('Usuario no encontrado');
      ctx.throw(404, 'Usuario no encontrado');
    }
  } catch (error) {
    console.log(error);
    ctx.throw(error);
  }
});

router.post('Usuarios.create', '/signup', async (ctx) => {
  try {
    const hashedPassword = await bcrypt.hash(ctx.request.body.password, 5);
    // eslint-disable-next-line no-unused-vars
    const usuario = await ctx.orm.Usuario.create({
      nombre: ctx.request.body.nombre,
      contrasena_hash: hashedPassword,
      rol: 'operario',
    });
    ctx.status = 201;
  } catch (error) {
    console.log(error);
    ctx.throw(error);
  }
});

router.post('/logout', async (ctx) => {
  try {
    await ctx.orm.Session.destroy({
      where: { id: `${ctx.session.sessionid}` },
    });
    ctx.session.sessionid = undefined;
    ctx.status = 200;
  } catch (error) {
    ctx.throw(error);
  }
});
module.exports = router;
