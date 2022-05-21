import { Router } from 'express';
import GoalController from '../../controllers/GoalController.js';

const goalRouter: Router = Router();

goalRouter.post('/goals', GoalController.createGoal);
goalRouter.get('/goals', GoalController.getAllGoals);
goalRouter.get('/goals/:id', GoalController.getGoal);
goalRouter.put('/goals', GoalController.updateGoal);
goalRouter.delete('/goals/:id', GoalController.deleteGoal);

export default goalRouter;
