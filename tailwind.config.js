const BonaventureConfig = require('@caravelx/bonaventure/tailwind.config')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      ...BonaventureConfig.theme.extend,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
