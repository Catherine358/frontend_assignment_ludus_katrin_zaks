import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from 'moment';
import './challenge.scss';
import Grid from "@material-ui/core/Grid";

import { fetchChallenge } from "../../../store/actions/challenge";

import Question from "../../UI/question-card";
import Spinner from "../../../spinner/Spinner";
import ErrorIndicator from "../../../error-indicator";

const Challenge = ({ id }) => {
    const dispatch = useDispatch();
    const challengeData = useSelector(state => state.challenge.challenge);
    const error = useSelector(state => state.challenge.error);

    useEffect(() => {
        dispatch(fetchChallenge(id));
    }, [dispatch, id]);

    if(error) {
        return (
            <Grid container direction="column" className="challenge-container">
                <ErrorIndicator error={error}/>
            </Grid>
        );
    }

    return (
      <Grid container direction="column" className="challenge-container">
          {
              !challengeData || (Object.keys(challengeData).length === 0) ? <Spinner/> :
              <>
                  <Grid container direction="row" className="details">
                      <Grid container item sm={5} className="challenge-icon-big" style={{
                          backgroundImage: `url(${ challengeData.challengeImage })`
                      }}/>
                      <Grid container item sm={7} direction="column" className="challenge-info">
                          <p className="name-date">
                              { challengeData.challengeName + " - " + Moment(challengeData.createdAt).format('DD MMM YYYY') }
                          </p>
                          <div className="author-container">
                              <div className="author-icon" style={{ backgroundImage: `url(${challengeData.author.icon})` }}/>
                              <p className="author-name">
                                  { challengeData.author.firstName + " " + challengeData.author.lastName }
                              </p>
                          </div>
                      </Grid>
                  </Grid>
                  <Grid container direction="row" className="questions">
                      { challengeData.questions.map(question => {
                          return <Question key={question.question} question={question}/>;
                      }) }
                  </Grid>
            </>
          }
      </Grid>
    );
};

export default Challenge;
