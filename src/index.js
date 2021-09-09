const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, "public")))
//http logs
app.use(morgan('combined'))
//template engine
app.engine('hbs', handlebars({
  extname: ".hbs"
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
//app route
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

//listen port 300

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
