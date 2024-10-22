import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const port = process.env.PORT
const app = express()

const startServer = () => {
    app.listen(port, () => {
        console.log(`Sever initialized on port ${port}`)
    })
}

export default { app, startServer }