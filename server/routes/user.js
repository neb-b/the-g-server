import { Router } from 'express';
import UserController from '../controllers/user';

const router = new Router();
const contoller = new UserController();

router.route('/users/:id').get(controller.getUser);

router.route('/users').post(controller.createUser);

router.route('/users/:id').patch(controller.updateUser);

router.route('/users/:id').delete(controller.deleteUser);

export default router;
