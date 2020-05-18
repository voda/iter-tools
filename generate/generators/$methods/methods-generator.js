'use strict';

const { resolve } = require('path');
const loglevel = require('loglevel');

const BaseAsyncGenerator = require('../base-async-generator');

const log = loglevel.getLogger('generator');

class MethodsGenerator extends BaseAsyncGenerator {
  constructor(macrome, options) {
    super(macrome, options);

    this.glob = ['src/**/$*.js'];
    this.ignored = [...this.ignored, '**/__tests__/**'];
  }

  getDestName(basename) {
    return `${basename.slice(1)}.mjs`;
  }

  getBabelConfigPath() {
    return resolve(__dirname, 'babel.config.js');
  }

  addPath(path) {
    super.addPath(path);

    if (this.multiGenerator.inWatchMode) {
      log.info(`Picked up new method template: ${path}`);
    }
  }

  removePath(path) {
    super.removePath(path);

    log.info(`Removed files generated by deleted method template: ${path}`);
  }
}

module.exports = MethodsGenerator;
