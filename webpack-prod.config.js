const FileSystem = require('fs');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ReplaceHashWebpackPlugin = require('replace-hash-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const vendors = ['react', 'react-dom', 'redux', 'react-router-dom', 'react-redux', 'moment', 'redux-thunk', 'axios',
  'react-router-redux'];
const clientFolder = path.join(__dirname, 'client');

const processTemplate = (fileName, processSwitch) => {
  const ascxTemplate = FileSystem.readFileSync(path.join(__dirname, '../UserControls/Shared/', fileName), 'utf8');
  const htmlOutput = processSwitch(ascxTemplate);
  FileSystem.writeFileSync(path.join(__dirname, '../dist/', fileName), htmlOutput);
}

const isProd = process.env.NODE_ENV.trim() === 'production';

const webpackConfig = {
  entry: {
    bundle: ['babel-polyfill', path.join(clientFolder, 'app.js')],
    vendor: vendors,
    styles: ['../css/main.scss'], //, '../css/aktivera.scss'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.scss$/,
        exclude: [clientFolder],
        include: [path.join(__dirname, '..', 'css')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              minimize: isProd ?
                {
                  autoprefixer: {
                    add: true,
                    remove: true,
                  }
                } : false,
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProd,
            }
          }]
        }),
      },
      {
        test: /\.svg$/,
        exclude: /node_modules\/(?!(trumbowyg)\/).*/,
        loader: 'svg-inline-loader',
      },
      {
        test: /jquery[\\\/]src[\\\/]selector\.js$/,
        loader: 'amd-define-factory-patcher-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(
      [
        path.resolve(__dirname, '../dist/js/'),
        path.resolve(__dirname, '../dist/css/'),
      ],
      {
        root: path.resolve(__dirname, '../'),
        verbose: true,
        dry: false,
      }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /sv|en/),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV.trim()),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery/src/core',
      jQuery: 'jquery/src/core',
    }),
    new ExtractTextPlugin(
      {
        filename: '../css/[name].[contenthash].css',
        allChunks: true,
      }
    ),
    function () {
      this.plugin('done', function (statsData) {
        const stats = statsData.toJson();

        if (!stats.errors.length) {
          console.log(stats.assetsByChunkName);

          processTemplate('FooterResourcesLoader.ascx', (htmlOutput) => {
            return htmlOutput
              .replace(/bundle\.js/i, stats.assetsByChunkName.bundle)
              .replace(/vendor\.js/i, stats.assetsByChunkName.vendor);
          });

          processTemplate('HeaderResourcesLoader.ascx', (htmlOutput) => {
            const fileName = stats.assetsByChunkName.styles[1].replace(/\.\.\/css\//i, '');
            return htmlOutput.replace(/main\.css/i, fileName);
          });
        }
      });
    },
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist/js/'),
    chunkFilename: '[name].[hash].chunk.js',
    publicPath: '/dist/js/',
  },
};


if (isProd) {
  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
  webpackConfig.plugins.push(new UglifyJSPlugin());
} else {
  webpackConfig.devtool = 'inline-source-map';
}

module.exports = webpackConfig;