const tmp = require('tmp');
const { ExportManager, ExportConfig } = require('fusionexport-node-client');

const outputDir = tmp.dirSync().name;

module.exports = async (chartConfig) => {
  const exportManager = new ExportManager({
    ...(process.env.FE_SERVER_HOST
      && process.env.FE_SERVER_PORT && {
      host: process.env.FE_SERVER_HOST,
      port: process.env.FE_SERVER_PORT,
    }),
  });

  const exportConfig = new ExportConfig();
  exportConfig.set('chartConfig', JSON.stringify(chartConfig));
  exportConfig.set('type', 'pdf');

  const [outFile] = await exportManager.export(exportConfig, outputDir, true);
  return outFile;
};
