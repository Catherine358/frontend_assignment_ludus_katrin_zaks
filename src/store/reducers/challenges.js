import { FETCH_CHALLENGES_FAILURE, FETCH_CHALLENGES_REQUEST, FETCH_CHALLENGES_SUCCESS } from "../../constants/Constants";

const initialState = {
    challenges: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHALLENGES_REQUEST:
            return {
                challenges: {},
                error: ''
            };
        case FETCH_CHALLENGES_SUCCESS:
            return {
                challenges: action.payload,
                error: ''
            };
        case FETCH_CHALLENGES_FAILURE:
            return {
                challenges: {},
                error: action.payload
            };
        default: return state;
    }
};
