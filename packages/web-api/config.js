const path = require('path');

exports.ROOT_DIR = __dirname;
exports.PROJECT_DIR = __dirname;
exports.CONTROLLER_DIRECTORY = path.join(__dirname, 'controllers');
exports.URL_PATH = 'http://localhost';
exports.URL_PORT = 8080;
exports.BASE_VERSION = '/api/v3';
exports.OPENAPI_YAML = path.join(ROOT_DIR, 'api', 'openapi.yaml');
exports.FULL_PATH = `${URL_PATH}:${URL_PORT}/${BASE_VERSION}`;
exports.FILE_UPLOAD_PATH = path.join(PROJECT_DIR, 'uploaded_files');
