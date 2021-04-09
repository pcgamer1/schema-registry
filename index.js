
const app = require('./app')
const fs = require('fs')
const port = process.env.PORT

if(fs.existsSync(process.env.SCHEMA_PATH)) {
  const localObj = fs.readFileSync(process.env.SCHEMA_PATH)
  fs.writeFileSync('schemas.json', localObj)
}

app.listen(port, () => {
    console.log('Server is up on port', port)
})