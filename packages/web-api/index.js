const config = require('./config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');

const expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
expressServer.launch().then(
  () => logger.info('Express server running'),
  (e) => logger.error('Error while launching the server', e),
);
process.on('SIGINT', () => {
  expressServer.close().catch((e) => logger.error(e));
});
