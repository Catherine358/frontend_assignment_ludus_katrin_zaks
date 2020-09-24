import { UPDATE_FAVOURITES } from "../../constants/Constants";

const favouritesUpdated = (newArr) => {
    return {
        type: UPDATE_FAVOURITES,
        payload: newArr
    };
};

export const updateFavourites = (upIndex, challenge, dispatch, prevList) => {
    const newArrOfFavourites = [...prevList];
    if(upIndex > 0) {
        newArrOfFavourites.push(challenge);
        dispatch(favouritesUpdated(newArrOfFavourites));
    } else if(upIndex < 0) {
        const indexOfChallenge = newArrOfFavourites.findIndex(({ challengeId }) => challenge.challengeId === challengeId);
        newArrOfFavourites.splice(indexOfChallenge, 1);
        dispatch(favouritesUpdated(newArrOfFavourites));
    }
};
