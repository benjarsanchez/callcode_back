const Router = require('koa-router');

const router = new Router();

router.delete('lineaproduccions.delete', '/lineaproduccions/:id_linea', async (ctx) => {
  try {
    const lineas = ctx.state.tokendata.lineaproduccions;

    let found = false;

    lineas.array.forEach((linea) => {
      if (linea.id === ctx.params.id_linea) {
        found = true;
      }
    });

    if (found) {
      await ctx.orm.LineaProduccion.destroy({
        where: { id: `${ctx.params.id_linea}` },
      });

      ctx.status = 202;
    } else {
      ctx.throw('No tiene permiso para realizar esta acción', 401);
    }
  } catch (error) {
    ctx.throw(error);
  }
});

module.exports = router;
