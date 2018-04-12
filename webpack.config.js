const path = require('path');
const webpack = require('webpack');

const jsxRule = {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-regenerator',
            'syntax-dynamic-import',
            'transform-async-to-generator'
        ],
        presets: [
            ['env', {
                targets: {
                    browsers: ['last 2 versions'],
                }
            }],
            'react'
        ]
    }
}

module.exports = {
    mode        : 'development',
    entry       : ['babel-polyfill', './front/src/App.jsx'],
    output      : {
        path        : path.join(__dirname, 'front/dist'),
        filename    : './[name].bundle.js',
        publicPath  : '/',
        sourceMapFilename   : '[file].map',
    },
    module: {
        rules: [jsxRule]
    },
    plugins: [],
};
