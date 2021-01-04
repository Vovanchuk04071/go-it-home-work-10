const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader" 
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [  
                    'img-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                 options: {
                name: '[path][name].[ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        }),
        new MiniCssExtractPlugin()
    ],
    
    devServer: { 
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4040,
        stats: 'errors-only'
    },
    devtool: 'eval-cheap-source-map'
};   