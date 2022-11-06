// @ts-check

const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const prodConfig = {
    ...baseConfig,
    remotes: [
      ['login', 'https://o-b-one.github.io/react-mfe/apps/login/remoteEntry.js'],
      ['feed', 'https://o-b-one.github.io/react-mfe/apps/feed/remoteEntry.js'],
      ['navbar', 'https://o-b-one.github.io/react-mfe/apps/navbar/remoteEntry.js'],
    ],
};

module.exports = withModuleFederation(prodConfig);
