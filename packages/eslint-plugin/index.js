module.exports = {
  configs: {
    // Core configs - When extending, one of these should go first
    esnext: require('./lib/config/esnext'),
    typescript: require('./lib/config/typescript'),

    // Augmenting configs - When extending, these go after the core config
    jest: require('./lib/config/jest'),
    node: require('./lib/config/node'),
    react: require('./lib/config/react'),

    // Prettier config - When extending, this must go last
    prettier: require('./lib/config/prettier'),
  },
};
