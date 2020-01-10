const path = require("path");
const levelsToRoot = require("./tools/levels-to-root");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {

    console.log("argv?", argv);
    

    const theme = argv.theme || "theme1";
    const baseurl = env.baseurl;

    const basename = env && env.basename ? `/${env.basename}/` : "/";
    const isRelease = env && env.release;

    console.log("Is release?", isRelease);

    console.log("Basename? ", basename);

    const config = {
        entry: `./src/${theme}.js`,
        output: {
            path: path.resolve(__dirname, `dist${basename}`),
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
            new MiniCssExtractPlugin({
                filename: "css/[name].css"
            })
        ]
    };

    if (isRelease) {
        const rootPath = levelsToRoot(basename);
        config.plugins.push(
            new HtmlWebpackPlugin({
                filename: `${rootPath}index.html`,
                template: "./src/rootindex.html",
                title: `${theme}`,
                basename,
                baseurl
            })
        )
    }

    config.plugins.push(
        new FileManagerPlugin({
            onStart: [
                {
                    delete: ["./dist"]
                }
            ],
            onEnd: [
                {
                    copy: [
                        {
                            source: `./dist/**.*`,
                            destination: `./dist${basename}/test/`
                        }
                    ],
                    mkdir: [`./dist${basename}release`],
                    // archive: onEndArchive,
                    delete: ["./dist/temp"]
                }
            ]
        })
    );

    return config
}