const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 5976,
    contentBase: path.join(__dirname, 'dist'), 
    hot:true
  },
  resolve: {
    extensions:['.ts','.js']
  },
  plugins:[new HTMLWebpackPlugin({
    title:'index',
    template: './index.html',
    filename:'index.html'
  })],
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:'ts-loader',
        exclude:'/node_modules/'
      }
    ]
  }
};
