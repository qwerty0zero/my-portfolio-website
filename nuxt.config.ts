

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    ssr: false,      // отключаем SSR
    target: 'static', // SSG
    nitro: {
        preset: 'github_pages',
        prerender: {
            routes: [
                '/', // главная
            ]
        }
    },
    app:{
        baseURL: '/my-portfolio-website/', // 👈 имя репозитория!

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
    ]
    // plugins здесь НЕ нужно
})
