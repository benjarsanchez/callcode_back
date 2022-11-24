const Router = require('koa-router');

const router = new Router();

const calculateOutput = (body) => {
  const output = [];
  const insumo = body.insumos;
  const { procesos } = body;

  const ht = insumo.hoja_tabaco;
  const ta = insumo.tabaco_aromatizado;
  const { curado } = procesos;
  const { procesamiento } = procesos;
  const { armado } = procesos;
  const { aromatizacion } = procesos;

  /* si ht >100 y curado+procesamiento+aramdo = cigarrillos */
  if ((ht > 100) && curado && procesamiento && armado) {
    /* Chequeamos si son aromatizados */
    if (aromatizacion) {
      console.log('Cigarrillos Aromatiados');
      // eslint-disable-next-line no-useless-concat
      const answer = ('Cigarrillos Aromatizados' + ` = ${ht * 5}`);
      output.push(answer);
    } else {
      console.log('Cigarrillos');
      // eslint-disable-next-line no-useless-concat
      const answer = ('Cigarrillos' + ` = ${ht * 5}`);
      output.push(answer);
    }
  } else if (ht > 10 && curado) {
    console.log('Nervio');
    // eslint-disable-next-line no-useless-concat
    const answer = ('Nervio' + ` = ${ht * 2}`);
    output.push(answer);
  }
  /* si t_a >= 80 y armado = cigarrillos aromatizados */
  if (ta >= 80 && armado) {
    console.log('Cigarrillos Aromatizados');
    // eslint-disable-next-line no-useless-concat
    const answer = ('Cigarrillos Aromatizados' + ` = ${ta * 5}`);
    output.push(answer);
  }
  console.log('impresion de output', output);
  return output;
};

router.post('Simulation.calculate', '/', async (ctx) => {
  try {
    const answer = calculateOutput(ctx.request.body);
    ctx.body = answer;
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

module.exports = router;
