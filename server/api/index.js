const consola = require('consola');
const router = require('express').Router();
const exportChart = require('../services/exportChart');

router.post('/export', async (req, res) => {
  const { chartConfig } = req.body;

  if (!chartConfig) {
    res.status(400).json({
      message: 'Required parametes are missing',
    });
    return;
  }

  consola.info('Save request received');

  try {
    const outFile = await exportChart(chartConfig);
    consola.success('Task completed');
    res.sendFile(outFile);
  } catch (e) {
    consola.error('Error occurred', e);
    res.status(500).json({
      error: e.message,
    });
  }
});

module.exports = router;
