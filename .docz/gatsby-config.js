const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'K-Mart Mobile App',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './src',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'K-Mart Mobile App',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 8889,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Volumes/Macintosh HD - Data/najih/rn-docz',
          templates:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/node_modules/docz-core/dist/templates',
          docz: '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz',
          cache: '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz/.cache',
          app: '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz/app',
          appPackageJson:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/package.json',
          appTsConfig:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/tsconfig.json',
          gatsbyConfig:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/gatsby-config.js',
          gatsbyBrowser:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/gatsby-browser.js',
          gatsbyNode:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/gatsby-node.js',
          gatsbySSR: '/Volumes/Macintosh HD - Data/najih/rn-docz/gatsby-ssr.js',
          importsJs:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz/app/imports.js',
          rootJs:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz/app/root.jsx',
          indexJs:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz/app/index.jsx',
          indexHtml:
            '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz/app/index.html',
          db: '/Volumes/Macintosh HD - Data/najih/rn-docz/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
