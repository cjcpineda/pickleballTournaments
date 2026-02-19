module.exports = {
  default: {
   
    require: [
      'tests/steps/**/*.ts',
      'tests/support/**/*.ts',
      'tests/world/**/*.ts'   
    ],
    paths: ['tests/features/**/*.feature'],
    requireModule: [
      'ts-node/register',
      'tsconfig-paths/register'],
    format: ['progress-bar', 'html:test-results/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
};