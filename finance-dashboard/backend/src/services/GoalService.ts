import Goal from '../models/Goal.js';
import { GoalType } from '../types/types'

class GoalService {
  async createGoal(goal: GoalType) {
    const createdGoal = await Goal.create(goal);
    return createdGoal;
  }

  async getAllGoals() {
    const goals = await Goal.find();
    return goals;
  }

  async getGoal(id: string) {
    if (!id) {
      throw new Error('Id is not found');
    }
    const goal = await Goal.findById(id);
    return goal;
  }

  async updateGoal(goal: GoalType) {
    if (!goal._id) {
      throw new Error('Id is not found');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(goal._id, goal, {
      new: true
    });
    return updatedGoal;
  }

  async deleteGoal(id: string) {
    if (!id) {
      throw new Error('Id is not found');
    }
    const goal = await Goal.findByIdAndDelete(id);
    return goal;
  }
}

export default new GoalService();
