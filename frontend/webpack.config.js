const path = require('path');

module.exports = {
    entry: "./src/App.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './target/resources'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/target/resources',
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
        historyApiFallback: true,
        port: 8075,
        open: true
        // inline: false,
        // contentBase: "./dist",
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.js?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],  // используемые плагины

                }},
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
}