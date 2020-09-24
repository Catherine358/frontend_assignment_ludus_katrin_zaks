import { FETCH_CHALLENGES_FAILURE, FETCH_CHALLENGES_SUCCESS, FETCH_CHALLENGES_REQUEST } from "../../constants/Constants";
import { getChallengesList } from "../../services/ServerWork";

const challengesLoaded = (obj) => {
  return {
      type: FETCH_CHALLENGES_SUCCESS,
      payload: obj
  };
};

const challengesRequested = () => {
    return {
        type: FETCH_CHALLENGES_REQUEST
    };
};

const challengesError = (error) => {
    return {
        type: FETCH_CHALLENGES_FAILURE,
        payload: error
    };
};

export const fetchChallenges = (sortParam, pageNum, sortDir) => {
    return async (dispatch) => {
        dispatch(challengesRequested());
        await getChallengesList(sortParam, pageNum, sortDir)
            .then(data => dispatch(challengesLoaded(data)))
            .catch(error => dispatch(challengesError(error.message)));
    };
};
