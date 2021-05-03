const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

 
const readBookmarksController = require('./controllers/readBookmarks.js')
app.use('/bookmarks', readBookmarksController)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})