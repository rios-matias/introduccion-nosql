import mongoose from 'mongoose'
require('dotenv').config()

async function connectToDatabase () {
  mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) =>
      console.error(
        'There was an error trying to connect to database: ' + error
      )
    )
}

export default connectToDatabase
