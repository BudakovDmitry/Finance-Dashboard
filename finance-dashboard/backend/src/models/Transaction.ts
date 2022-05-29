import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    reciever: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
