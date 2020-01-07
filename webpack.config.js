const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    
    const theme = argv.theme || "theme1";

    const config = {
        entry: `./src/${theme}.js`,
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js"
        },
        resolve: {
            extensions: []
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    }
                ] 
              }]
        },
        plugins: [
            new HtmlWebpackPlugin({template: './src/index.html'}),
            new MiniCssExtractPlugin({
                filename: "[name].css"
            })
        ]
    }

    return config
}