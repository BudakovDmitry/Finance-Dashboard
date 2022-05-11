import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
  {
    title: {
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

const Goal = mongoose.model('Goal', goalSchema);

export default Goal;
