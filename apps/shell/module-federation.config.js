// @ts-check
const {shared} = require('../../tools/webpack/shard.conf');



/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
    name: 'shell',
    shared,
};

module.exports = moduleFederationConfig;