// PatternFly 4 uses global CSS imports in its distribution files. Therefore,
// we need to transpile the modules before we can use them.
const withTM = require('next-transpile-modules')([
    '@patternfly/react-core',
    '@patternfly/react-icons',
    '@patternfly/react-table',
    '@patternfly/react-styles',
    //'@patternfly/react-core/node_modules/@patternfly/react-styles'
])

module.exports = withTM({
    reactStrictMode: true,
    poweredByHeader: false,

    images: {
        domains: ['images.unsplash.com', 'www.pixels.com']
        //try adding pexels.com images domain
    }
})