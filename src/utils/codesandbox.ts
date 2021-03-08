import { getParameters } from 'codesandbox/lib/api/define'
import JSZip from 'jszip'
import saveAs from 'file-saver'

export const buildParameters = (code: string): string => {
  var zip = new JSZip()
  zip.file(
    'babel.config.js',
    `module.exports = (api) => {
    api.cache(true)

    return {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              browsers: 'Last 2 Chrome versions, Firefox ESR',
              node: '8.9',
            },
          },
        ],
        [
          '@babel/preset-react',
          {
            development: process.env.BABEL_ENV !== 'build',
          },
        ],
      ],
      env: {
        build: {
          ignore: ['**/*.test.js', '**/*.test.jsx', '__snapshots__', '__tests__'],
        },
      },
      ignore: ['node_modules'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-runtime',
        'babel-plugin-styled-components',
      ],
    }
  }
  `,
  )

  zip.file(
    'webpack.config.js',
    `const path = require('path')
  const webpack = require('webpack')

  const PATHS = {
    app: path.join(__dirname, 'src/index.js'),
  }

  module.exports = {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: 'http://localhost:8080/',
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: /src/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(js|jsx)?$/,
          use: 'react-hot-loader/webpack',
          include: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    devServer: {
      index: 'index.html',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
    devtool: 'inline-source-map',
  }
`,
  )

  zip.file(
    'webpack.prod.config.js',
    `const path = require('path')
  const webpack = require('webpack')

  const PATHS = {
    app: path.join(__dirname, 'src/index.js'),
  }

  module.exports = {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: /src/,
          sideEffects: false,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
  }
`,
  )

  zip.file(
    'manifest.lkml',
    `project_name: "generated-extension"

  application: generated-extension {
    label: "generated-extension"
    url: "http://localhost:8080/bundle.js"
    # file: "bundle.js
    entitlements: {
    core_api_methods: ["me"] #Add more entitlements here as you develop new functionality
  }
  }
`,
  )

  zip.file(
    'package.json',
    `{
    "name": "generated-project",
    "version": "0.0.1",
    "description": "Bootstrapped Looker Extension",
    "main": "dist/bundle.js",
    "scripts": {
      "clean": "rm -rf dist",
      "start": "webpack serve --hot --disable-host-check --port 8080",
      "build": "export BABEL_ENV=build && webpack --mode=production --config webpack.prod.config.js",
      "test": "echo \'Error: no test specified\' && exit 1"
    },
    "author": "Looker",
    "license": "MIT",
    "engines": {
      "node": ">=12"
    },
    "resolutions": {
      "@babel/runtime": "^7.12.5"
    },
    "dependencies": {
      "@hot-loader/react-dom": "^16.13.0",
      "@looker/components": "0.9.6",
      "@looker/embed-sdk": "1.0.0-beta.6",
      "@looker/extension-sdk": "^0.11.0",
      "@looker/extension-sdk-react": "^0.6.2",
      "@looker/sdk": "0.3.0-beta.1",
      "react": "^16.13.1",
      "react-dom": "^16.13.1",
      "react-router-dom": "^5.1.2",
      "react-hot-loader": "^4.12.20",
      "styled-components": "^4.4.1",
      "styled-system": "^5.1.2",
      "webpack": "^5.10.0",
      "webpack-bundle-analyzer": "^4.2.0",
      "webpack-cli": "^4.2.0",
      "webpack-dev-server": "^3.10.3"
    },
    "devDependencies": {
      "babel-loader": "^8.0.6",
      "@babel/cli": "^7.7.4",
      "@babel/core": "^7.0.0-0",
      "@babel/plugin-proposal-class-properties": "^7.7.4",
      "@babel/plugin-proposal-object-rest-spread": "^7.7.4",
      "@babel/plugin-transform-react-jsx": "^7.3.0",
      "@babel/plugin-transform-runtime": "^7.7.4",
      "@babel/preset-env": "^7.7.4",
      "@babel/preset-react": "^7.7.4",
      "@babel/preset-typescript": "^7.7.4",
      "@babel/runtime": "^7.7.4",
      "babel-preset-nano-react-app": "^0.1.0",
      "css-loader": "^3.5.2",
      "json-server": "^0.16.1",
      "style-loader": "^1.1.3"
    },
    "babel": {
      "presets": [
        "nano-react-app"
      ],
      "plugins": [
        [
          "@babel/plugin-proposal-class-properties",
          {
            "loose": true
          }
        ],
        [
          "@babel/plugin-transform-react-jsx",
          {
            "pragmaFrag": "React.Fragment"
          }
        ]
      ]
    }
  }`,
  )

  zip.file(
    'src/index.js',
    `import * as React from 'react'
  import * as ReactDOM from 'react-dom'
  import { App } from './App'

  window.addEventListener('DOMContentLoaded', (event) => {
    var root = document.createElement('div')
    document.body.appendChild(root)
    ReactDOM.render(<App />, root)
  })
  `,
  )

  zip.file('src/App.js', code)

  zip.generateAsync({ type: 'blob' }).then(function(content) {
    // @ts-ignore: Weird error
    saveAs(content, 'generated-extension.zip') //tslint:disable
  })

  return getParameters({
    files: {
      'babel.config.js': {
        content: `module.exports = (api) => {
          api.cache(true)

          return {
            presets: [
              [
                '@babel/env',
                {
                  targets: {
                    browsers: 'Last 2 Chrome versions, Firefox ESR',
                    node: '8.9',
                  },
                },
              ],
              [
                '@babel/preset-react',
                {
                  development: process.env.BABEL_ENV !== 'build',
                },
              ],
            ],
            env: {
              build: {
                ignore: ['**/*.test.js', '**/*.test.jsx', '__snapshots__', '__tests__'],
              },
            },
            ignore: ['node_modules'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-runtime',
              'babel-plugin-styled-components',
            ],
          }
        }
        `,
        isBinary: false,
      },
      'webpack.config.js': {
        content: `const path = require('path')
        const webpack = require('webpack')
        const env_config = require('./env_config')

        const PATHS = {
          app: path.join(__dirname, 'src/index.js'),
        }

        module.exports = {
          entry: {
            app: PATHS.app,
          },
          output: {
            path: __dirname + '/dist',
            filename: 'bundle.js',
            publicPath: 'http://localhost:8080/',
          },
          mode: 'development',
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: /src/,
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.(js|jsx)?$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/,
              },
            ],
          },
          resolve: {
            extensions: ['.jsx', '.js'],
          },
          devServer: {
            index: 'index.html',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
              'Access-Control-Allow-Headers':
                'X-Requested-With, content-type, Authorization',
            },
          },
          devtool: 'inline-source-map',
          plugins: [new webpack.DefinePlugin(env_config())],
        }
`,
        isBinary: false,
      },
      'webpack.prod.config.js': {
        content: `const path = require('path')
        const webpack = require('webpack')
        const env_config = require('./env_config')

        const PATHS = {
          app: path.join(__dirname, 'src/index.js'),
        }

        module.exports = {
          entry: {
            app: PATHS.app,
          },
          output: {
            path: __dirname + '/dist',
            filename: 'bundle.js',
          },
          mode: 'production',
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: /src/,
                sideEffects: false,
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            ],
          },
          resolve: {
            extensions: ['.jsx', '.js'],
          },
          plugins: [new webpack.DefinePlugin(env_config())],
        }
`,
        isBinary: false,
      },
      'manifest.lkml': {
        content: `project_name: "generated-extension"

        application: generated-extension {
          label: "generated-extension"
          url: "http://localhost:8080/bundle.js"
          # file: "bundle.js
          entitlements: {
          core_api_methods: ["me"] #Add more entitlements here as you develop new functionality
        }
        }
`,
        isBinary: false,
      },
      'src/index.js': {
        content: `import * as React from 'react'
        import * as ReactDOM from 'react-dom'
        import { App } from './App'

        window.addEventListener('DOMContentLoaded', (event) => {
          var root = document.createElement('div')
          document.body.appendChild(root)
          ReactDOM.render(<App />, root)
        })
`,
        isBinary: false,
      },
      'src/App.js': {
        content: code,
        isBinary: false,
      },
      'package.json': {
        content: `{
          "name": "generated-project",
          "version": "0.0.1",
          "description": "Bootstrapped Looker Extension",
          "main": "dist/bundle.js",
          "scripts": {
            "clean": "rm -rf dist",
            "start": "webpack serve --hot --disable-host-check --port 8080",
            "build": "export BABEL_ENV=build && webpack --mode=production --config webpack.prod.config.js",
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "Looker",
          "license": "MIT",
          "engines": {
            "node": ">=12"
          },
          "resolutions": {
            "@babel/runtime": "^7.12.5"
          },
          "dependencies": {
            "@hot-loader/react-dom": "^16.13.0",
            "@looker/components": "0.9.6",
            "@looker/embed-sdk": "1.0.0-beta.6",
            "@looker/extension-sdk": "^0.11.0",
            "@looker/extension-sdk-react": "^0.6.2",
            "@looker/sdk": "0.3.0-beta.1",
            "react": "^16.13.1",
            "react-dom": "^16.13.1",
            "react-router-dom": "^5.1.2",
            "react-hot-loader": "^4.12.20",
            "styled-components": "^4.4.1",
            "styled-system": "^5.1.2",
            "webpack": "^5.10.0",
            "webpack-bundle-analyzer": "^4.2.0",
            "webpack-cli": "^4.2.0",
            "webpack-dev-server": "^3.10.3"
          },
          "devDependencies": {
            "babel-loader": "^8.0.6",
            "@babel/cli": "^7.7.4",
            "@babel/core": "^7.0.0-0",
            "@babel/plugin-proposal-class-properties": "^7.7.4",
            "@babel/plugin-proposal-object-rest-spread": "^7.7.4",
            "@babel/plugin-transform-react-jsx": "^7.3.0",
            "@babel/plugin-transform-runtime": "^7.7.4",
            "@babel/preset-env": "^7.7.4",
            "@babel/preset-react": "^7.7.4",
            "@babel/preset-typescript": "^7.7.4",
            "@babel/runtime": "^7.7.4",
            "babel-preset-nano-react-app": "^0.1.0",
            "css-loader": "^3.5.2",
            "json-server": "^0.16.1",
            "style-loader": "^1.1.3"
          },
          "babel": {
            "presets": [
              "nano-react-app"
            ],
            "plugins": [
              [
                "@babel/plugin-proposal-class-properties",
                {
                  "loose": true
                }
              ],
              [
                "@babel/plugin-transform-react-jsx",
                {
                  "pragmaFrag": "React.Fragment"
                }
              ]
            ]
          }
        }`,
        isBinary: false,
      },
    },
  })
}
