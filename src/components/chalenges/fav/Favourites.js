import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import './favourites.scss';
import ChallengeCard from "../../UI/challenge-card";

import { updateFavourites } from "../../../store/actions/favourites";

const Favourites = (props) => {
    const favourites = useSelector(state => state.favourites.favourites);

    const dispatch = useDispatch();

    const updateFavsListHandler = (upIndex, challenge) => {
        updateFavourites(upIndex, challenge, dispatch, favourites);
    };

    return (
        <Grid container direction="column" className="fav-challenges-list">
            <h1>FAVOURITE CHALLENGES</h1>
            {
                favourites.length === 0 ? <div className="warning">There are no favourite challenges, please add some.</div> :
                <Grid container direction="row" justify="space-around">
                    {
                        favourites.map(fav => <ChallengeCard key={fav.challengeId}
                                                           fav
                                                           challenge={fav}
                                                           updateFavs={updateFavsListHandler}/>)
                    }
                </Grid>
            }
        </Grid>
    );
};

export default Favourites;
