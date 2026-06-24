import express from 'express'
import alertsRouter from './routes/alerts.js'

const app = express()

app.use('/public', express.static('./public'))

app.use('/alerts', alertsRouter)

app.get('/', (req, res) => {
  res.redirect('/alerts')
})

app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>404</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      </head>
      <body>
        <main class="container">
          <h1>404 - Page Not Found</h1>
          <p>The route you requested does not exist.</p>
          <a href="/alerts">Back to SignalWatch </a>
        </main>
      </body>
    </html>
  `)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})