import projects from './app/assets/data/projects.json'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    ssr: false,          // отключаем SSR
    target: 'static',     // SSG
    router: {
        base: '/my-portfolio-website/' // имя репозитория для GitHub Pages
    },
    nitro: {
        preset: 'vercel_static',
        prerender: {
            routes: [
                '/', // главная
                ...projects.map(p => `/projects/${p.projectName}`)
            ]
        }
    },
    app: {
        head: {
            title: 'Ihor Kuhel',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [{ name: 'theme-color', content: '#d52627' }],
        },
    },
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/fonts'],
    css: [
        '~/assets/styles/variables.css',
        '~/assets/styles/style.css'
    ],
    build: {
        publicPath: '/my-portfolio-website/_nuxt/' // чтобы JS/CSS корректно подгружались
    }
})
