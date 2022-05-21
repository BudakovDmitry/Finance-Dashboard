import { Application } from 'express';
import goalsRouter from './api/goalsRouter.js';

class AppRouter {
  constructor(private app: Application) {}
    init() {
      this.app.get('/', (_req, res) => {
        res.send('API Running');
      });
      this.app.use('/api', goalsRouter);
    }
}

export default AppRouter;
