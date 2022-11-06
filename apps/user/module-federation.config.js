// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
    name: 'login',
    exposes:{
        './public-api':'./public-api.ts'
    }
};

module.exports = moduleFederationConfig;