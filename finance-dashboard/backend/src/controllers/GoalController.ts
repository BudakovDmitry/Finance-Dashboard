import GoalService from '../services/GoalService.js';
import { Response, Request } from 'express'

class GoalController {
  async createGoal(req: Request, res: Response) {
    try {
      const goal = await GoalService.createGoal(req.body);
      res.json(goal);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllGoals(req: Request, res: Response) {
    try {
      const goals = await GoalService.getAllGoals();
      return res.json(goals);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getGoal(req: Request, res: Response) {
    try {
      const goal = await GoalService.getGoal(req.params.id);
      return res.json(goal);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateGoal(req: Request, res: Response) {
    try {
      const updatedGoal = await GoalService.updateGoal(req.body);
      return res.json(updatedGoal);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteGoal(req: Request, res: Response) {
    try {
      const goal = await GoalService.deleteGoal(req.params.id);
      return res.json(goal);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new GoalController();
