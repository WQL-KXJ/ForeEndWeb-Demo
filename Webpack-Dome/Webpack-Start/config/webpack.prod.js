//nodejs核心模块,专门用来处理路径问题
const path = require("path")
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
//引入css打包加载模块
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
module.exports = {
    //1,入口
    entry: './src/main.js',//相对路径
    //2,输出
    output: {
        //文件的输出路径，__dirname nodejs的变量，代表当前文件的文件夹目录
        path: path.resolve(__dirname,"../dist"),
        //文件名
        filename: "js/main.js",
        clean:true
    },
    //3,加载器
    module:{
        rules: [
            //loader配置
            {
                test: /\.css$/,//只检测以.css为后缀的文件
                //use执行顺序，从左到右或从上到下
                use: [MiniCssExtractPlugin.loader,//将js中的css通过创建style标签添加到html文件中
                        "css-loader",
                    {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-preset-env", // 能解决大多数样式兼容性问题
                ],
              },
            },
          },
                    ]//将css资源编译成commonjs的模块到js中
            },
            {
                test: /\.less$/,//检测以.less为后缀的文件
                use: [MiniCssExtractPlugin.loader,
                      "css-loader",
                      "less-loader"] //将less编译成css
            },
            {
                test: /\.s[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader" //将sass编译成css文件
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,//对以上后缀文件进行打包处理
                type: "asset", //使用asset模式
                parser:{
                    dataUrlCondition: {
                        maxSize: 100 * 1024 // 小于100kb的图片会被base64处理
                      }
                },
                generator: {
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:8][ext][query]
                    // [hash:8]: hash值取8位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename: "static/imgs/[hash:8][ext][query]",
                  },
            },
            {
                test: /\.(ttf|woff|woff2)$/,//对以上后缀文件进行打包处理
                type: "asset/resource", //使用asset模式
                generator: {
                    // 将图标字体文件输出到 static/imgs 目录中
                    // 命名 [hash:8][ext][query]
                    // [hash:8]: hash值取8位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename: "static/media/[hash:8][ext][query]",
                  },
            },
            {
                test:/\.js$/,//只处理js资源
                exclude: /node_modules/,//排除node_modules中的js文件(这些文件不做处理)
                loader:"babel-loader"//使用babel-loader加载器来处理
                
            }

        ]
    },
    //4,插件
    plugins: [
        //plugin的配置
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "../src"),
          }),
          new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"../public/index.html")

          }),
          new MiniCssExtractPlugin({
            //定义集体打包后的css的输出目录
            filename:"static/css/main.css"

          })
    ],
    optimization: {
        minimizer: [
          // 压缩图片
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                plugins: [
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                  [
                    "svgo",
                    {
                      plugins: [
                        "preset-default",
                        "prefixIds",
                        {
                          name: "sortAttrs",
                          params: {
                            xmlnsOrder: "alphabetical",
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
        ],
      },
    //5,模式
    mode: "production"
}

