const { describe } = require('mocha');
const assume = require('assume');
const { test } = require('@oclif/test');

describe.only('hello', function() {
  test
    .stdout()
    .command(['hello'])
    .it('runs hello', ctx => {
      assume(ctx.stdout).to.contain('hello world');
    });

  test
    .stdout()
    .command(['hello', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      assume(ctx.stdout).to.contain('hello jeff');
    });
});
