const Router = require('koa-router');

const router = new Router();

router.post('LineaProduccions.create', '/', async (ctx) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const lineaproduccion = await ctx.orm.LineaProduccion.create({
      id_producto: ctx.request.body.producto,
      unidades: ctx.request.body.unidades,
      id_planificador: ctx.request.body.planificador,
      id_operario: ctx.request.body.operario,
      fecha: ctx.request.body.fecha,
    });
    ctx.status = 201;
  } catch (error) {
    console.log(error);
    ctx.throw(error);
  }
});

router.get('LineaProduccions.show', '/', async (ctx) => {
  try {
    const lineaproduccions = await ctx.orm.LineaProduccion.findAll();
    ctx.body = lineaproduccions;
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

router.del('LineaProduccions.delete', '/:id', async (ctx) => {
  try {
    const lineaproduccion = await ctx.orm.LineaProduccion.findByPk(ctx.params.id);
    await lineaproduccion.destroy();
    ctx.status = 204;
  } catch (error) {
    ctx.throw(404);
  }
});

router.put('LineaProduccions.update', '/:id', async (ctx) => {
  try {
    const lineaproduccion = await ctx.orm.LineaProduccion.findByPk(ctx.params.id);
    await lineaproduccion.update({
      id_producto: ctx.request.body.producto,
      unidades: ctx.request.body.unidades,
      id_planificador: ctx.request.body.planificador,
      id_operario: ctx.request.body.operario,
      fecha: ctx.request.body.fecha,
    });
    ctx.status = 204;
  } catch (error) {
    ctx.throw(404);
  }
});

module.exports = router;
