import { FETCH_CHALLENGE_FAILURE, FETCH_CHALLENGE_REQUEST, FETCH_CHALLENGE_SUCCESS } from "../../constants/Constants";

const initialState = {
    challenge: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHALLENGE_REQUEST:
            return {
                challenge: {},
                error: ''
            };
        case FETCH_CHALLENGE_SUCCESS:
            return {
                challenge: action.payload,
                error: ''
            };
        case FETCH_CHALLENGE_FAILURE:
            return {
                challenge: {},
                error: action.payload
            };
        default: return state;
    }
};
