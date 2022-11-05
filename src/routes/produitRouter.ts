import {Router} from "express"
import * as produitCtrl from "../controllers/produitController"

const router = Router()

router.get('/', produitCtrl.getAllProduit)
router.post('/', produitCtrl.createProduit)

router.get('/:id', produitCtrl.getProductById)


export default router