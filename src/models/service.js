import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Service = new Schema({
  studentId: Number,
  name: {
    type: String,
    required: [true, 'Name should not be empty'],
    minLength: [3, 'Name must have at least 3 characters']
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: [true, 'Price should not be empty'],
    min: [0, 'Price cannot be less than 0']
  },
  duration: {
    type: Number,
    required: [true, 'Duration should not be empty'],
    min: [0, 'Duration cannot be less than 0 minutes']
  }
})

module.exports = mongoose.model('Service', Service)
