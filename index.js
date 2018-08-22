const readline = require('readline')

if (process.argv.length !== 3) {
  console.log('usage: node index.js {modify.js}')
  process.exit()
}
const modify = require(`${process.cwd()}/${process.argv[2]}`)

const rl = readline.createInterface({input: process.stdin})
rl.on('line', line => {
  console.log(JSON.stringify(modify(JSON.parse(line))))
})