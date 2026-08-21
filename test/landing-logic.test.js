const test = require('node:test');
const assert = require('node:assert/strict');

const {
  getCopy,
  getInstallCommand,
} = require('../landing-logic.js');

test('keeps the verified DSH install command unchanged', () => {
  assert.equal(
    getInstallCommand(),
    'dsh plugin --profile web add @snapmarketing/dsh-plugin-center',
  );
});

test('returns complete Chinese copy for the language toggle', () => {
  const copy = getCopy('zh');

  assert.equal(copy.languageButton, 'English');
  assert.equal(copy.stepDiscover, '发现');
  assert.equal(copy.stepInstall, '安装');
  assert.equal(copy.stepUse, '使用');
  assert.doesNotMatch(copy.heroDescription, /[—–]/);
});

test('falls back to English copy for an unknown language', () => {
  assert.equal(getCopy('fr').languageButton, '中文');
  assert.equal(getCopy('fr').stepInstall, 'Install');
});
