import { AnyAction } from 'redux';

const initialState = {
  goals: [
    {
      id: 1,
      title: 'Holidays',
      date: '12/20/20',
      amount: 500,
      type: 'Mountain'
    },
    {
      id: 2,
      title: 'Renovation',
      date: '12/20/20',
      amount: 200,
      type: 'Brash'
    },
    {
      id: 3,
      title: 'PlayStation 5',
      date: '12/20/20',
      amount: 820,
      type: 'Joystick'
    }
  ],
  transactions: [
    {
      id: 1,
      reciever: 'Tesco Market',
      type: 'Shopping',
      date: '13 Dec 2020',
      amount: 75.67
    },
    {
      id: 2,
      reciever: 'ElectroMen Market',
      type: 'Shopping',
      date: '14 Dec 2020',
      amount: 250
    },
    {
      id: 3,
      reciever: 'Fiorgio Restaurant',
      type: 'Food',
      date: '07 Dec 2020',
      amount: 19.5
    },
    {
      id: 4,
      reciever: 'John Mathew Kayne',
      type: 'Sport',
      date: '06 Dec 2020',
      amount: 350
    },
    {
      id: 5,
      reciever: 'Ann Marlin',
      type: 'Shopping',
      date: '31 Nov 2020',
      amount: 430
    }
  ],
  darkTheme: false,
  mail: [
    { name: 'John Smith', message: 'Hello! How are you?', id: 1 },
    { name: 'Jannifer Bowl', message: 'Help! Send me 100$', id: 2 },
    { name: 'Mikl Dick', message: 'Hi!', id: 3 },
    { name: 'Steven Snow', message: 'What do you do?', id: 4 }
  ]
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'GOAL_CREATED':
      return {
        ...state,
        goals: [...state.goals, action.payload]
      };
    case 'GOAL_DELETED':
      return {
        ...state,
        goals: state.goals.filter(item => item.id !== action.payload)
      };
    case 'TRANSACTION_CREATED':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case 'THEME_UPDATE':
      return {
        ...state,
        darkTheme: !state.darkTheme
      };
    default:
      return state;
  }
};

export default reducer;
