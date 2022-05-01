const initialState = {
    goals: [
        {
            id: 1,
            title: "Holidays",
            date: "12/20/20",
            amount: 500,
            type: "Mountain",
        },
        {
            id: 2,
            title: "Renovation",
            date: "12/20/20",
            amount: 200,
            type: "Brash",
        },
        {
            id: 3,
            title: "PlayStation 5",
            date: "12/20/20",
            amount: 820,
            type: "Joystick",
        },
    ],
    transactions: [
        {
            reciever: "Tesco Market",
            type: "Shopping",
            date: "13 Dec 2020",
            amount: 75.67,
        },
        {
            reciever: "ElectroMen Market",
            type: "Shopping",
            date: "14 Dec 2020",
            amount: 250,
        },
        {
            reciever: "Fiorgio Restaurant",
            type: "Food",
            date: "07 Dec 2020",
            amount: 19.5,
        },
        {
            reciever: "John Mathew Kayne",
            type: "Sport",
            date: "06 Dec 2020",
            amount: 350,
        },
        {
            reciever: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430,
        },
    ],
    darkTheme: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GOAL_CREATED":
            let newCreatedGoalsList = [...state.goals, action.payload];
            return {
                ...state,
                goals: newCreatedGoalsList,
            };
        case "GOAL_DELETED":
            const newGoalsList = state.goals.filter(
                (item) => item.id !== action.payload
            );
            return {
                ...state,
                goals: newGoalsList,
            };
        case "TRANSACTION_CREATED":
            let newTransactionGoalsList = [
                ...state.transactions,
                action.payload,
            ];
            return {
                ...state,
                transactions: newTransactionGoalsList,
            };
        case "THEME_UPDATE":
            return {
                ...state,
                darkTheme: !state.darkTheme,
            };
        default:
            return state;
    }
};

export default reducer;
