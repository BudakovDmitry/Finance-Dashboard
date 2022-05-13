export interface GoalType {
  id: string;
  type: string;
  title: string;
  date: string;
  amount: string;
}

export interface SignupType {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}
