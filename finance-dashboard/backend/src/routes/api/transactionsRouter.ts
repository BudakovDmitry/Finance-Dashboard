import { Router } from 'express';
import TransactionsController from '../../controllers/TransactionsController.js';

const transactionsRouter: Router = Router();

transactionsRouter.post('', TransactionsController.createTransaction);
transactionsRouter.get('', TransactionsController.getAllTransactions);
transactionsRouter.get('/:id', TransactionsController.getTransaction);
transactionsRouter.put('', TransactionsController.updateTransaction);
transactionsRouter.delete('/:id', TransactionsController.deleteTransaction);

export default transactionsRouter;
