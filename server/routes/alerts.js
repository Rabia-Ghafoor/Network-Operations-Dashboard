import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import alertData from '../data/alerts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Return all alerts as JSON
router.get('/', (req, res) => {
    res.status(200).json(alertData)
})

// Return the HTML page
router.get('/view', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, '..', '..', 'alert.html')
    )
})

export default router