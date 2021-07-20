module.exports = {
  env: {
    development: {
      presets: [
        [
          'next/babel',
          {
            'class-properties': {
              loose: true
            }
          }
        ]
      ],
      plugins: [
        'babel-plugin-transform-typescript-metadata',
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true
          }
        ],
        [
          'babel-plugin-graphql-tag',
          {
            strip: true
          }
        ]
      ]
    },
    production: {
      presets: [
        [
          'next/babel',
          {
            'class-properties': {
              loose: true
            }
          }
        ]
      ],
      plugins: [
        'babel-plugin-transform-typescript-metadata',
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true
          }
        ],
        [
          'babel-plugin-graphql-tag',
          {
            strip: true
          }
        ]
      ]
    }
  }
}
