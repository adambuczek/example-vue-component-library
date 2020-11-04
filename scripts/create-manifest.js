/**
 * All paths relative to package.json file
 */
require('dotenv').config()
const fg = require('fast-glob')
const fs = require('fs')
const path = require('path')

const { COMPONENTS_DIR, OUTPUT_DIR } = process.env

const ensureDirectory = directory => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }
}

const copyThumbnail = (componentDir, thumbnail, name) => {
  const imgInputPath = path.resolve(componentDir, thumbnail)
  const newFilename = `${name}-${path.basename(thumbnail)}`
  const imgOutputPath = path.resolve(OUTPUT_DIR, newFilename)
  
  fs.copyFileSync(imgInputPath, imgOutputPath)
  // Windows compatibility: Replace possible '\'
  return path.join(newFilename).replace(/\\/g, '/')
}

ensureDirectory(OUTPUT_DIR)

const componentManifests = fg.sync(`${COMPONENTS_DIR}/**/manifest.json`)

const packageMeta = require(path.resolve('package.json'))
const libManifest = {
  name: packageMeta.name,
  version: packageMeta.version,
  components: []
}

componentManifests.forEach(manifestPath => {
  const componentManifest = require(path.resolve(manifestPath))
  const dir = path.dirname(manifestPath)
  componentManifest.src = path.join(dir, 'index.vue')
  componentManifest.img = copyThumbnail(dir, componentManifest.img, componentManifest.name)

  libManifest.components.push(componentManifest)
})

fs.writeFileSync(
  path.resolve(OUTPUT_DIR, 'manifest.json'),
  JSON.stringify(libManifest, null, 2)
)

