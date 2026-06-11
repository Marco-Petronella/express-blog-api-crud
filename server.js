
const express = require('express')
const port = 3000
const app = express()
const blogRouter = require('./routers/blogRouter')

app.use(express.json())

app.listen(port, () => {
  console.log('Server started on port ' + port);
})

app.get('/', (req,res) => {
  res.send('Il server funziona!')
})

app.use('/posts', blogRouter)