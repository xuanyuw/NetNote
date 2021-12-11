import Mode from 'frontmatter-markdown-loader/mode'
import { buildRenderer } from './utils/markdown_renderer'
const path = require('path')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NetNote',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/github.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    '@nuxtjs/axios',
  ],
  axios: {
    // proxy: true
  },

  // markdownit: {
  //   preset: 'default',
  //   linkify: true,
  //   breaks: true,
  //   use: ['markdown-it-div', 'markdown-it-attrs'],
  // },

  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://localhost:3000/',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push(
        {
          test: /\.md$/,
          include: path.resolve(__dirname, 'content'),
          loader: 'frontmatter-markdown-loader',
          options: {
            mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
            markdown(body) {
              let md = buildRenderer()
              return md.render(body)
            },
          },
        },
        {
          test: /\.ya?ml$/,
          loader: 'json-loader!yaml-loader',
        }
      )
    },
  },
  serverMiddleware: ['~/api/index.js'],
}
