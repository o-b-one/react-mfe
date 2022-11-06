const coreLibraries = new Set([
    'react',
    'react-dom',
    'react-router-dom',
    "@mfe/auth"
]);

function shared(libraryName, defaultConfig){
    if (coreLibraries.has(libraryName)) {
    return defaultConfig;
    }

    return false;
}

module.exports = {shared}