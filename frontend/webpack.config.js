const path = require('path');

module.exports = {
    entry: "./src/App.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './target/resources'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
        contentBase: __dirname + "/public/",
        inline: true,
        port: 8075
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
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
}