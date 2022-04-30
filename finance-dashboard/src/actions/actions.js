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
