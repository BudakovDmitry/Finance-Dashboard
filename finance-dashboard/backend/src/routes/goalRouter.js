import { Router } from 'express';
import Goal from '../models/Goal.js';

const goalRouter = new Router();

goalRouter.post('/goals', async (req, res) => {
  try {
    const { title, amount, date, type } = req.body;
    const goal = await Goal.create({ title, amount, date, type });
    res.json(goal);
  } catch (error) {
    res.status(500).json(error);
  }
});
goalRouter.get('/goals');
goalRouter.get('/goals/:id');
goalRouter.put('/goals/:id');
goalRouter.delete('/goals/:id');

export default goalRouter;
