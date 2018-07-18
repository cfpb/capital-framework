module.exports = {
  verbose: false,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/scripts/npm/prepublish/lib/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/gulpfile.js',
    '<rootDir>/jest.config.js',
    '<rootDir>/node_modules/',
    '<rootDir>/config/',
    '<rootDir>/dist/',
    '<rootDir>/scripts/gulp/',
    '<rootDir>/src/.?/node_modules/',
    '<rootDir>/src/capital-framework.js',
    '<rootDir>/src/cf-expandables/src/cf-expandables.js',
    '<rootDir>/src/cf-tables/src/cf-tables.js',
    '<rootDir>/test/',
    '<rootDir>/tmp/'
  ],
  coverageDirectory: '<rootDir>/test/unit-test-coverage'
};
