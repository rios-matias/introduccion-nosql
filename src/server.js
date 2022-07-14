const servicesRouter = require('./routes/services')

const mongoose = require("mongoose");
const express = require("express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
require("dotenv").config();


const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(express.json())

//routes
app.use('/services', servicesRouter)

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "nosql introduction API",
            description: "API for learning and practice nosql with mongoDB",
            contact: {
                name: "Matias Rios"
            },
            servers: ["http://localhost:8000"]
        }
    },
    // ['.routes/*.js']
    apis: ["src/routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))



//database connection
mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

// server listening
app.listen(port,
    () => {
        console.log("Server listening to ", port)
    })