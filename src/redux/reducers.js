// redux/reducers.js
const initialState = {
    data: null,
    showTournament: false,
    tournamentData: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...state,
                data: action.payload,
            };
        case 'SHOW_TOURNAMENT':
            return {
                ...state,
                showTournament: action.payload,
            };
        case 'TOURNAMENT_DATA':
            return {
                ...state,
                tournamentData: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
