import {Router} from "express"
import * as produitCtrl from "../controllers/produitController"

const router = Router()

router.get('/', produitCtrl.getAllProduit)
router.post('/', produitCtrl.createProduit)

router.get('/:id', produitCtrl.getProductById)
router.patch('/:id', produitCtrl.updateProduit)
router.delete('/:id', produitCtrl.deleteProduitById)


export default router