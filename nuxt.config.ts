import { defineNuxtConfig } from 'nuxt'


const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css:[
        '~/assets/main.scss'
    ],
    watchQuery: true,
    publicRuntimeConfig: {
        STRAPI_URL: process.env.STRAPI_URL
    },
    buildModules:['@nuxtjs/color-mode','@nuxtjs/strapi'],
    strapi: {
        version: 'v3',
        // Options
    },
    colorMode:{
        classPrefix:'',
        classSuffix:'',
    },
    build: {
        transpile: lifecycle === "build" ? ["element-plus"] : [],
      },
})
