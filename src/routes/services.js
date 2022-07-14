const { getAllServices, getServiceById, newService, updateService, deleteService } = require('../controllers/servicesController')
const express = require("express")
const router = express.Router()

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all services
 *    responses:
 *      '200':
 *        description: All services sended successfully
 */
router.get('/', getAllServices)

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request an specific service by its id
 *    responses:
 *      '200':
 *        description: service sended successfully
 */
router.get('/:id', getServiceById)

/**
 * @swagger
 * /:
 *    post:
 *      description: Use create a new service
 *    parameters:
 *      - name: name
 *        in: body
 *        description: Name of the new service
 *        required: true
 *        schema:
 *          type: string
 *      - name: description
 *        in: body
 *        description: Description of the new service
 *        required: true
 *        schema:
 *          type: string
 *      - name: duration
 *        in: body
 *        description: duration of the new service
 *        required: true
 *        schema:
 *          type: number
 *      - name: price
 *        in: body
 *        description: price of the new service
 *        required: true
 *        schema:
 *          type: number
 * 
 *    responses:
 *      '200':
 *        description: Successfully created service
 */
router.post("/", newService)

/**
 * @swagger
 * /:
 *    put:
 *      description: Update an existing service
 *    parameters:
 *      - name: id
 *        in: params
 *        description: new name of the service
 *        required: false
 *        schema:
 *          type: string
 * 
 *    responses:
 *      '200':
 *        description: Successfully updated service
 */
router.put("/:id", updateService);

/**
 * @swagger
 * /:
 *    delete:
 *      description: Use create a new service
 *    parameters:
 *      - name: id
 *        in: params
 *        description: id of the service to delete
 *        required: true
 *        schema:
 *          type: string
 * 
 *    responses:
 *      '200':
 *        description: Successfully deleted service
 */
router.delete("/:id", deleteService)

module.exports = router