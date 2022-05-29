import Transaction from '../models/Transaction.js';
import { TransactionType, CreateTransactionType } from '../types/types';


class TransactionsService {
  async createTransaction(transaction: CreateTransactionType) {
    const createdTransaction = await Transaction.create(transaction);
    return createdTransaction;
  }

  async getAllTransactions() {
    const transactions = await Transaction.find();
    return transactions;
  }

  async getTransaction(id: string) {
    if (!id) {
      throw new Error('Id is not found');
    }
    const transaction = await Transaction.findById(id);
    return transaction;
  }

  async updateTransaction(transaction: TransactionType) {
    if (!transaction._id) {
      throw new Error('Id is not found');
    }
    const updatedTransaction = await Transaction.findByIdAndUpdate(transaction._id, transaction, {
      new: true
    });
    return updatedTransaction;
  }

  async deleteTransaction(id: string) {
    if (!id) {
      throw new Error('Id is not found');
    }
    const transaction = await Transaction.findByIdAndDelete(id);
    return transaction;
  }
}

export default new TransactionsService();
