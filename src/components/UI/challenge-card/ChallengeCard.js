import React, { useState } from "react";
import Moment from 'moment';
import './challengeCard.scss';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const ChallengeCard = ({ fav, challenge, updateFavs }) => {
    const [isFavourite, setIsFavourite] = useState(false);

    return (
      <Grid container direction="row" className="challenge-card">
          <Grid container
                item sm={5}
                className="challenge-icon"
                style={{ backgroundImage: `url(${ challenge.challengeImage })` }}
          />
          <Grid container item sm={6} className="challenge-info">
              <p className="challenge-name">
                  { challenge.challengeName }
                  {
                      !fav && !isFavourite ?
                          <i className="far fa-star" onClick={() => {
                              updateFavs(1, challenge);
                              setIsFavourite(true);
                          }}/> :
                          <i className="fas fa-star" onClick={() => {
                              updateFavs(-1, challenge);
                              setIsFavourite(false);
                          }}/>
                  }
              </p>
              <p className="number-questions">
                  <span>Number of questions: </span>{ challenge.numberOfQuestions }
              </p>
              <p className="creation-date">
                  <span>Created at: </span>{ Moment(challenge.createdAt).format('DD MMM YYYY') }
              </p>
              <div className="challenges-list-btn-container">
                  <Link to={`/challenge/${ challenge.challengeId }`}>
                    <Button variant="contained" className="challenge-view-btn">View Challenge</Button>
                  </Link>
              </div>
          </Grid>
      </Grid>
    );
};

export default ChallengeCard;
