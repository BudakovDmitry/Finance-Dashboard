export const goalCreated = (goal) => {
    return {
        type: "GOAL_CREATED",
        payload: goal,
    };
};

export const goalDeleted = (id) => {
    return {
        type: "GOAL_DELETED",
        payload: id,
    };
};

export const transactionCreated = (transaction) => {
    return {
        type: "TRANSACTION_CREATED",
        payload: transaction,
    };
};

export const themeUpdate = () => {
    return {
        type: "THEME_UPDATE",
    };
};
