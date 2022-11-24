const Router = require('koa-router');
const bcrypt = require('bcrypt');

const router = new Router();

router.del('Usuarios.delete', '/:id', async (ctx) => {
  // Debe revisar si el usuario es admin
  try {
    const session = await ctx.orm.Session.findByPk(ctx.session.sessionid);
    const usuario = session.userid;
    const user = await ctx.orm.Usuario.findByPk(usuario);
    if (user.rol === 'admin') {
      await ctx.orm.Usuario.destroy({
        where: { id: `${ctx.params.id}` },
      });
      ctx.response.status = 202;
    } else {
      ctx.throw('No tienes permiso para eliminar este usuario', 401);
    }
  } catch (error) {
    console.log(error);
    ctx.throw(error);
  }
});

router.get('Usuarios.show', '/:id', async (ctx) => {
  try {
    const session = await ctx.orm.Session.findByPk(ctx.session.sessionid);
    const usuario = session.userid;
    const usuarios = await ctx.orm.Usuario.findByPk(usuario);
    ctx.body = usuarios;
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});
router.get('Usuarios.show', '/', async (ctx) => {
  try {
    const info = await ctx.orm.Usuario.findAll();
    ctx.body = info;
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

router.put('Usuarios.update', '/:id', async (ctx) => {
  try {
    const usuario = await ctx.orm.Usuario.findByPk(ctx.params.id);
    const hashedPassword = await bcrypt.hash(ctx.request.body.password, 5);
    await usuario.update({
      nombre: ctx.request.body.nombre,
      contrasena_hash: hashedPassword,
      rol: ctx.request.body.rol,
    });
    ctx.status = 204;
  } catch (error) {
    ctx.throw(404);
  }
});

module.exports = router;
