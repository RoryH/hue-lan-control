const path = require('path');

module.exports = {
    entry: './lib/hue-lan-control.js',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-1']
                    }
                }
            }
        ]
    }
};