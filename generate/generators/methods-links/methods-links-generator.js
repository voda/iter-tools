'use strict';

const { dirname, basename, relative, join, normalize } = require('path');
const camelcase = require('camelcase');
const completeExtname = require('path-complete-extname');

const BaseGenerator = require('../base-generator');
const template = require('../base-template');

class MethodsLinksGenerator extends BaseGenerator {
  constructor(macrome, options) {
    super(macrome, options);

    this.glob = ['src/methods/*/[^$]*.{mjs,d.ts}'];
    this.ignored = ['src/methods/*_/**'];
  }

  getDestPath(implPath) {
    const dir = dirname(implPath);
    const file = basename(implPath);

    return normalize(join(dir, '../..', file));
  }

  generatePath(implPath, destPath) {
    const generatedFrom = relative(dirname(destPath), implPath);
    const extName = completeExtname(implPath);
    const moduleName = basename(implPath, extName);
    const methodName = camelcase(basename(implPath, extName));
    const methodDirName = basename(dirname(implPath));

    const impl = `import ${methodName} from './methods/${methodDirName}/${moduleName}';\n\nexport default ${methodName};`;

    return template(impl, generatedFrom);
  }
}

module.exports = MethodsLinksGenerator;
