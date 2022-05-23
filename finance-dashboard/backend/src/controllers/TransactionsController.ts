import TransactionsService from '../services/TransactionsService.js';
import { Response, Request } from 'express'

class TransactionsController {
  async createTransaction(req: Request, res: Response) {
    try {
      const transaction = await TransactionsService.createTransaction(req.body);
      res.json(transaction);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllTransactions(req: Request, res: Response) {
    try {
      const transactions = await TransactionsService.getAllTransactions();
      return res.json(transactions);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getTransaction(req: Request, res: Response) {
    try {
      const transaction = await TransactionsService.getTransaction(req.params.id);
      return res.json(transaction);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateTransaction(req: Request, res: Response) {
    try {
      const updatedTransaction = await TransactionsService.updateTransaction(req.body);
      return res.json(updatedTransaction);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteTransaction(req: Request, res: Response) {
    try {
      const transaction = await TransactionsService.deleteTransaction(req.params.id);
      return res.json(transaction);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new TransactionsController();
