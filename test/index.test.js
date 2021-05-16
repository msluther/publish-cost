const { describe, it } = require('mocha');
const assume = require('assume');
const entrypoint = require('../src/index');

describe('Entrypoint', function() {
    it('thows not implemented', function() {
        assume(() => entrypoint()).to.throw('Not implemented');
    });
});
