const webpack = require('webpack');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new webpack.DefinePlugin({
          'process.env': JSON.stringify({
            NODE_ENV: process.env.NODE_ENV,
            VITE_GITHUB_TOKEN: process.env.VITE_GITHUB_TOKEN,
          }),
        }),
      ],
    },
  },
};

export {};
