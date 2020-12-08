'use strict';

const { resolve } = require('path');
const loglevel = require('loglevel');

const BaseAsyncGenerator = require('../base-async-generator.cjs');

const log = loglevel.getLogger('generator');

class ImplsGenerator extends BaseAsyncGenerator {
  constructor(options) {
    super(options);

    this.glob = ['src/**/$*.{js,ts}'];
  }

  getDestName(basename, extname) {
    return `${basename.slice(1)}${extname}`;
  }

  getBabelConfigPath() {
    return resolve(__dirname, 'babel.config.cjs');
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

module.exports = ImplsGenerator;
