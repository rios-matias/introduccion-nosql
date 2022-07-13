const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());

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
    apis: ["src/server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /:
 *  get:
 *    description: Welcome endpoint 
 *    responses:
 *      '200':
 *        description: Successful response
 */
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});


// server listening
app.listen(port,
    () => {
        console.log("Server listening to ", port)
    });