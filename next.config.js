const locales = require('./locales.json')

module.exports = {
  i18n: {
    locales,
    defaultLocale: 'de-DE',
    localeDetection: true,
  },
  reactStrictMode: true,
}
