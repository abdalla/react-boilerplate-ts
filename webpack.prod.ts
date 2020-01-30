import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },

  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [htmlPlugin],

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

export default config;
