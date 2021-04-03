const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
  future: {
    webpack5: true,
  },
})
