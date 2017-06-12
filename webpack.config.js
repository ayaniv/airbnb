var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './js/app.js',
        vendor: ['angular', 'lodash', 'bootstrap']
    },
    output: {
        path: __dirname + '/static/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.bundle.js"}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};