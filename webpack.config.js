const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    main: "./src/main.ts",
    sidebar: "./src/sidebar.tsx", // Example! It works with React.
    modal: "./src/modal.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              // TODO: why the fuck i need this config? How about tsconfig.json?
              transpileOnly: true,
              compilerOptions: {
                target: "ES5",
                module: "esnext",
                jsx: "react",
                sourceMap: true,
                esModuleInterop: true // TODO: remove esModuleInterop + move to lodash-es?
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
};
