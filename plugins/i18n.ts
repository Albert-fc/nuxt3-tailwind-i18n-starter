import { createI18n } from 'vue-i18n'
import en from '../locales/en.json' 
import cat from '../locales/cat.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en, 
      cat,
    }
  })

  vueApp.use(i18n)
})