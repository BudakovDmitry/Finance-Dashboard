export interface GoalType {
  _id: string,
  title: string,
  amount: number,
  date: string,
  type: string
}

export interface CreateTransactionType {
  reciever: string,
  amount: number,
  date: string,
  type: string
}

export interface TransactionType {
  _id: string,
  reciever: string,
  amount: number,
  date: string,
  type: string
}