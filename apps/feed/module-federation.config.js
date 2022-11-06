// @ts-check
const {shared} = require('../../tools/webpack/shard.conf');

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
    name: 'feed',
    exposes:{
        './public-api':'./public-api.ts'
    },
    shared
};

module.exports = moduleFederationConfig;