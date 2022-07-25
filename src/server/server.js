import  servicesRouter from './routes/services'
import connectToDatabase from './databaseConnection'
import  express from "express"

const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(express.json())

//routes
app.use('/services', servicesRouter)

connectToDatabase()

// server listening
app.listen(port,
    () => {
        
        console.log("Server listening to ", port)
    })