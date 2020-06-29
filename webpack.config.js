const {resolve} = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const env = process.env.NODE_ENV
const mode = env === "production" ? "production":"development"
const isDev = mode === "development"
const isProd = mode === "production"

const plugins = []
if(env === "analyzer"){
    plugins.push(new BundleAnalyzerPlugin())
}

const distPath = resolve(__dirname,"dist")

module.exports={
    mode,
    bail: isProd,
    entry:'./demo/index.ts',
    output:{
        path: distPath,
        filename:isDev?'[name].js':'[name].[contenthash:8].js',
        chunkFilename: isDev ?'[name].chunk.js': '[contenthash:8].chunk.js'
    },
    devtool: isProd ? false: 'cheap-module-source-map',
    resolve:{
        extensions:['.ts','.tsx','.js'],
        modules:["node_modules", resolve(__dirname,"./lib")],
    },
    devServer:{
        contentBase: distPath,
        host:"127.0.0.1",
        port:"9999",
        hot:true
    },
    stats:"errors-only",
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                exclude: /node_modules/,
                use:  ['ts-loader']
            }
        ],
    },
    
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('./demo/tpl.html'),
            filename:isDev?'index.html':'demo.[contenthash].html'
        }),
        ...plugins
    ],
    performance: env === "analyzer"?true:false
}