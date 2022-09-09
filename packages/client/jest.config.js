module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/__tests__/*.(test|it).ts'
  ],
}
