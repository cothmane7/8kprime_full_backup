import type { Locale } from './i18n-config'

const dictionaries = {
  en: () => import('./locales/en.json').then((module) => module.default),
  de: () => import('./locales/de.json').then((module) => module.default),
  fr: () => import('./locales/fr.json').then((module) => module.default),
  nl: () => import('./locales/nl.json').then((module) => module.default),
  pl: () => import('./locales/pl.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en()
}
