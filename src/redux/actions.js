// redux/actions.js
export const updateData = (data) => {
    return {
        type: 'UPDATE_DATA',
        payload: data,
    };
};

export const selectedTournament = (data) => {
    return {
        type: 'TOURNAMENT_DATA',
        payload: data,
    };
};

export const showTournament = (data) => {
    return {
        type: 'SHOW_TOURNAMENT',
        payload: data
    };
};