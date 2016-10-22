import { Router } from 'express';
import TeamController from '../controllers/team';

const router = new Router();
const contoller = new TeamController();

router.route('/teams/:id').get(controller.getTeam);

router.route('/teams').post(controller.createTeam);

router.route('/teams/:id').patch(controller.updateTeam);

router.route('/teams/:id').delete(controller.deleteTeam);

export default router;
