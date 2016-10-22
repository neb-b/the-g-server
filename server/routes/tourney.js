import { Router } from 'express';
import TourneyController from '../controllers/tourney';

const router = new Router();
const contoller = new TourneyController();

router.route('/tourneys/:id').get(controller.getTourney);

router.route('/tourneys').post(controller.createTourney);

router.route('/tourneys/:id').patch(controller.updateTourney);

router.route('/tourneys/:id').delete(controller.deleteTourney);

export default router;
