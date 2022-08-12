export type GoalType = {
  _id: string;
  type: string;
  title: string;
  date: string;
  amount: number;
};

export type CreateGoalType = {
  type: string;
  title: string;
  date: string;
  amount: number;
};

export type SignupType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export type ReactChildren = {
  children: JSX.Element;
};
