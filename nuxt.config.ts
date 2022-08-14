import { defineNuxtConfig } from 'nuxt'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
    vite:{
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver({importStyle:false})],
            }),
            Components({
                resolvers: [ElementPlusResolver({importStyle:false})],
            }),
        ]
    }
})
