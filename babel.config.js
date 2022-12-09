module.exports = {
  presets: [
    [ '@babel/preset-env' ],
  ],
  assumptions: {
    privateFieldsAsProperties: true,
    setPublicClassFields: true
  },
  plugins: [
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
  ]
};
