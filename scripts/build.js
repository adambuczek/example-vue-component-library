/**
 * All paths relative to package.json file
 */
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const { OUTPUT_DIR } = process.env

const createLogger = (label = '') =>
  data => console.log(`${label}: ${data.toString()}`)
const stdoutLog = createLogger('stdout')
const stderrLog = createLogger('stderr')

const createBuildCommand = (input, output) => {
  const command = [
    'npx', 'vue-cli-service', 'build',
      '--target', 'lib',
      '--formats', 'umd-min',
      '--no-clean',
      '--dest', path.resolve(OUTPUT_DIR),
      '--name', input,
      output
  ]
  
  return command.join(' ')
}

const manifestPath = path.resolve(OUTPUT_DIR, 'manifest.json')
const manifest = require(manifestPath)

const components = manifest.components.slice()

manifest.components = []

components.forEach(component => {
  const input = component.src
  const output = component.name

  const command = createBuildCommand(output, input)
  
  try {
    const buildProcess = exec(command, (error, stdout, stderr) => {
      if (error) throw error
      stderrLog(stderr)
      stdoutLog(stdout)
    })
    buildProcess.stdout.on('data', stdoutLog)
    buildProcess.stderr.on('data', stderrLog)
  } catch (error) { 
    console.error(error)
    process.exit(1)
  }

  const [ style, script, map ] = [
    'css',
    'umd.min.js',
    'umd.min.js.map'
  ].map(extension => `${component.name}.${extension}`)

  manifest.components.push({
    ...component,
    style, script, map
  })
})

fs.writeFileSync(
  manifestPath,
  JSON.stringify(manifest, null, 2)
)