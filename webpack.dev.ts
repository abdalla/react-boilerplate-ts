import * as webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [htmlPlugin],

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

export default config;
