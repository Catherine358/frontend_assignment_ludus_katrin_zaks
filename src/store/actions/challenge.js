import { FETCH_CHALLENGE_FAILURE, FETCH_CHALLENGE_SUCCESS, FETCH_CHALLENGE_REQUEST } from "../../constants/Constants";
import { getChallengeById } from "../../services/ServerWork";

const challengeLoaded = (obj) => {
    return {
        type: FETCH_CHALLENGE_SUCCESS,
        payload: obj
    };
};

const challengeRequested = () => {
    return {
        type: FETCH_CHALLENGE_REQUEST
    };
};

const challengeError = (error) => {
    return {
        type: FETCH_CHALLENGE_FAILURE,
        payload: error
    };
};

export const fetchChallenge = (id) => {
    return async (dispatch) => {
        dispatch(challengeRequested());
        await getChallengeById(id)
            .then(data => dispatch(challengeLoaded(data)))
            .catch(error => dispatch(challengeError(error.message)));
    };
};
