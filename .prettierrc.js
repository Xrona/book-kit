const pluginSortImports = require('@trivago/prettier-plugin-sort-imports')

module.exports = {
    plugins: [pluginSortImports],
    tabWidth: 4,
    useTabs: true,
    singleQuote: true,
    printWidth: 120,
    arrowParens: 'always',
    semi: false,
    jsxSingleQuote: true,
    bracketSpacing: false,
    singleAttributePerLine: true,
    importOrder: ['<THIRD_PARTY_MODULES>', '^@/shared/(.*)$', '^@/assets/(.*)$', '^@/public/(.*)$', '^@/(.*)', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
