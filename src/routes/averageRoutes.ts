import { Router } from 'express';
import AverageController from '../controllers/averageController';

const router = Router();
const averageController = new AverageController();

export function setAverageRoutes(app) {
    app.use('/api/average', router);
    router.post('/', averageController.calculateAverage.bind(averageController));
}