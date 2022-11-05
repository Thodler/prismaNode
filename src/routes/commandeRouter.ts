import {Router} from "express"
import * as commandeCtrl from "../controllers/commandeController"

const router = Router()

router.get('/', commandeCtrl.getAllCommandes)
router.post('/', commandeCtrl.createCommande)

//TODO: Récupérer une comamnde par son id
router.delete('/:id', commandeCtrl.deleteCommande)

export default router