import { Application } from 'express';
import goalsRouter from './api/goalsRouter.js';
import transactionsRouter from './api/transactionsRouter.js'


class AppRouter {
  constructor(private app: Application) {}
    init() {
      this.app.get('/', (_req, res) => {
        res.send('API Running');
      });
      this.app.use('/api/goals', goalsRouter);
      this.app.use('/api/transactions', transactionsRouter);
    }
}

export default AppRouter;
