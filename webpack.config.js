const path = require("path");
const levelsToRoot = require("./tools/levels-to-root");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {

    console.log("argv?", argv);
    

    const theme = argv.theme || "theme1";

    const basename = env && env.basename ? `/${env.basename}/` : "/";
    const isRelease = env && env.release;

    console.log("Is release?", isRelease);

    console.log("Basename? ", basename);

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
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                greetings: `This is ${theme}`,
                title: theme
            }),
            new HtmlWebpackPlugin({
                filename: "page.html",
                template: './src/page.html',
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].css"
            })
        ]
    };

    if (isRelease) {
        const rootPath = levelsToRoot(basename);
        // config.plugins.push(
        //     new HtmlWebpackPlugin({
        //         filename: `page.html`,
        //         template: "./src/page.html",
        //         basename
        //     })
        // );
    }

    console.log("config: ", config.plugins);
    

    return config
}