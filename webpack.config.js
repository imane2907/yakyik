var webpack = require("webpack");
var path = require("path");

module.exports= {
	entry: ["./src/app.js"],
	output: {
		path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
	},
	devtool: "#source-map",
	module:{
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			loader: "babel-loader",
			
		}]
	},
	mode: "development"
	
}