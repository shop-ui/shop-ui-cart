import path from 'path'
import babel from 'rollup-plugin-babel'
import px2rem from 'postcss-px2rem'
import readDir from 'fs-readdir-recursive'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const configs = []

const common = {
  entry: 'src/index.js',
  dest: `lib/index.js`,
  format: 'cjs',
  sourceMap: true,
  external: prepExternalsForIndexJs(),
  plugins: [
    postcss({
      plugins: [
        px2rem({remUnit: 16}),
        autoprefixer()
      ],
      extensions: ['.css'],
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers',
        'add-module-exports',
        'transform-class-properties'
      ],
      presets: [
        [
          'es2015',
          {
            'modules': false
          }
        ],
        'react'
      ]
    })
  ]
}

prepComponentConfigs()

export default [
  Object.assign({}, common),
].concat(configs)

function prepExternalsForIndexJs () {
  const fileFilter = (filePath) => {
    return filePath.endsWith('.js')
  }
  const src = getSrcFiles('components', fileFilter)
  const externals = []

  src.fileNames.forEach(fileName => {
    if (fileName !== 'index.js') {
      externals.push(path.join(src.dir, fileName))
    }
  })

  return externals
}

function prepComponentConfigs () {
  const src = getSrcFiles()

  src.fileNames.forEach(filePath => {
    const fileName = lastPartOf(filePath, '/')
    if(!fileName.endsWith('.css') && !fileName.endsWith('.spec.js')) {
      configs.push(Object.assign({}, common, {
        entry: `src/${filePath}`,
        dest: `lib/${filePath}`,
        external: prepExternalsForIndexJs()
      }))
    }
  })
}

function getSrcFiles (nestedDir='', filter = () => true) {
  const dir = path.join(process.cwd(), 'src', nestedDir)
  const fileNames = readDir(dir)
  return {
    dir,
    fileNames: fileNames.filter(filter)
  }
}

function lastPartOf(str, delimiter = ',') {
  const parts = str.split(delimiter)
  return parts[parts.length - 1]
}
