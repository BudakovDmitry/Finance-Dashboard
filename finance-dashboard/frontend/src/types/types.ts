export interface GoalType {
  id: string;
  type: string;
  title: string;
  date: string;
  amount: number;
}

export interface CreateGoalType {
  type: string;
  title: string;
  date: string;
  amount: number;
}

export interface SignupType {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export type ReactChildren = {
  children: JSX.Element;
};
