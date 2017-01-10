import path from 'path'
import babel from 'rollup-plugin-babel'
import px2rem from 'postcss-px2rem'
import readDir from 'fs-readdir-recursive'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const configs = []

const common = {
  entry: 'src/index.js',
  format: 'cjs',
  sourceMap: true,
  dest: `lib/index.js`,
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
      externalHelpers: true,
      plugins: [
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
  const src = getSrcFiles('components')
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

  console.log(`----------------- src`); // TODO: Remove
  console.log(src); // TODO: Remove
  console.log(`-----------------`); // TODO: Remove

  src.fileNames.forEach(fileName => {
    configs.push(Object.assign({}, common, {
      entry: `src/${fileName}`,
      dest: `lib/${fileName}`,
      external: [
        path.join(src.dir, 'SvgIcon.js')
      ]
    }))

    console.log(`----------------- configs`); // TODO: Remove
    console.log(configs); // TODO: Remove
    console.log(`-----------------`); // TODO: Remove
  })
}

function getSrcFiles (nestedDir='') {
  const dir = path.join(process.cwd(), 'src', nestedDir)
  const fileNames = readDir(dir)
  return {dir, fileNames}
}
