var isProduction = process.env.NODE_ENV === 'production',
    version      = require('../package').version,

    YUI_VERSION = '3.9.1';

module.exports = {
    version: YUI_VERSION,

    config: {
        combine: isProduction,
        filter : isProduction ? 'min' : 'raw',
        root   : YUI_VERSION + '/',

        modules: {
            'mapbox-css': 'http://api.tiles.mapbox.com/mapbox.js/v0.6.7/mapbox.css',

            'mapbox': {
                fullpath: 'http://api.tiles.mapbox.com/mapbox.js/v0.6.7/mapbox.js',
                requires: ['mapbox-css']
            }
        },

        groups: {
            'app': {
                combine  : isProduction,
                comboBase: '/combo/' + version + '?',
                base     : '/',
                root     : '/',

                modules: {
                    'hide-address-bar': {
                        path: 'vendor/hide-address-bar.js'
                    },

                    'le-wedding': {
                        path: 'js/wedding.js',
                        requires: ['le-main', 'le-maps', 'event-resize', 'graphics']
                    },

                    'le-home': {
                        use: ['le-main', 'le-maps']
                    },

                    'le-main': {
                        path    : 'js/main.js',
                        requires: ['node-base', 'hide-address-bar']
                    },

                    'le-maps': {
                        path    : 'js/maps.js',
                        requires: ['node-base', 'mapbox']
                    }
                }
            }
        }
    }
};
