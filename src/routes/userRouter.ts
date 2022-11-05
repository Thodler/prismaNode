import { Router } from "express";
import * as userCtrl from '../controllers/userController'

const router = Router()

router.get('/', userCtrl.getUser)
router.post('/', userCtrl.createUser)

router.get('/:id', userCtrl.getUserById)
router.patch('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

export default router