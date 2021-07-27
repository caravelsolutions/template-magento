const BonaventureConfig = require('@caravelsolutions/bonaventure/tailwind.config')

module.exports = {
  mode: 'jit',
  theme: {
    ...BonaventureConfig.theme,
    colors: {
      ...BonaventureConfig.theme.colors,
    },
  },
  variantOrder: [
    ...BonaventureConfig.variantOrder,
  ],
  variants: {
    ...BonaventureConfig.variants,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
