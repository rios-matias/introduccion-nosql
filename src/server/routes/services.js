import { getAllServices, getServiceById, newService, updateService, deleteService } from '../../controllers/servicesController'
import express from "express"
const router = express.Router()

router.get('/', getAllServices)

router.get('/:id', getServiceById)

router.post("/", newService)

router.put("/:id", updateService);

router.delete("/:id", deleteService)

export default router