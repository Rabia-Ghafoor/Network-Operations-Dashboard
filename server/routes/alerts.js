import express from 'express'
import alertData from '../data/alerts.js'

const router = express.Router()

router.get('/', (req, res) => {
  const cards = alertData.map(alert => `
    <article>
      <img src="${alert.image}" alt="${alert.name}" style="width:100%; max-height:220px; object-fit:cover;">
      <h2>${alert.name}</h2>
      <p><strong>Severity:</strong> ${alert.severity}</p>
      <p><strong>Service:</strong> ${alert.service}</p>
      <p>${alert.description}</p>
      <a href="/alerts/${alert.id}" role="button">View Details</a>
    </article>
  `).join('')

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title> Signal Watch </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      </head>
      <body>
        <main class="container">
          <h1>Signal Watch: Network Operations Dashboard</h1>
          <p>A list-based incident response dashboard for infrastructure alerts.</p>
          ${cards}
        </main>
      </body>
    </html>
  `)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const alert = alertData.find(item => item.id === id)

  if (!alert) {
    return res.status(404).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Alert Not Found</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
        </head>
        <body>
          <main class="container">
            <h1>404 - Alert Not Found</h1>
            <a href="/alerts">Back to Alerts</a>
          </main>
        </body>
      </html>
    `)
  }

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${alert.name}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      </head>
      <body>
        <main class="container">
          <a href="/alerts">← Back to Alerts</a>
          <h1>${alert.name}</h1>
          <img src="${alert.image}" alt="${alert.name}" style="width:100%; max-height:300px; object-fit:cover;">
          <p><strong>ID:</strong> ${alert.id}</p>
          <p><strong>Severity:</strong> ${alert.severity}</p>
          <p><strong>Service:</strong> ${alert.service}</p>
          <p><strong>Description:</strong> ${alert.description}</p>
          <p><strong>Submitted By:</strong> ${alert.submittedBy}</p>
          <p><strong>Submitted On:</strong> ${alert.submittedOn}</p>
        </main>
      </body>
    </html>
  `)
})

export default router