
const express = require('express')
const port = 3000
const app = express()
const blogRouter = require('./routers/blogRouter')
const routeCheck = require('./middleware/routeCheck')

app.use(express.json())
app.use(routeCheck)

app.listen(port, () => {
  console.log('Server started on port ' + port);
})

app.get('/', (req,res) => {
  res.send('Il server funziona!')
})

app.use('/posts', blogRouter)