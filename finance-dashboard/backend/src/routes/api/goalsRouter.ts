import { Router } from 'express';
import GoalController from '../../controllers/GoalController.js';



const goalRouter: Router = Router();


goalRouter.post('', GoalController.createGoal);
goalRouter.get('', GoalController.getAllGoals);
goalRouter.get('/:id', GoalController.getGoal);
goalRouter.put('', GoalController.updateGoal);
goalRouter.delete('/:id', GoalController.deleteGoal);

export default goalRouter;
