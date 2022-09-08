const LEVEL = {
  WARN: 1,
  ERROR: 2,
  DISABLE: 0,
}

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'body-leading-blank': [LEVEL.ERROR, 'always'],
    'body-max-line-length': [LEVEL.DISABLE, 'always', 0],
    'footer-leading-blank': [LEVEL.ERROR, 'always'],
    'header-max-length': [LEVEL.ERROR, 'always', 100],
  },
}
