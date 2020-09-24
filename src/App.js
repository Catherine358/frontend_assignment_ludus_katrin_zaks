import React  from 'react';
import './App.css';
import { Route, Switch } from "react-router";
import Challenges from "./components/chalenges";
import Header from "./components/header";
import Favourites from "./components/chalenges/fav";
import Challenge from "./components/chalenges/challenge";

const App = () => {

  return (
    <Switch>
        <Route exact path="/" render={props => (
            <div className="wrapper">
                <Header {...props} page="main"/>
                <Challenges {...props} page="main"/>
            </div>
        )}/>
        <Route exact path="/favourites" render={props => (
            <div className="wrapper">
                <Header {...props} page="fav"/>
                <Favourites {...props}/>
            </div>
        )}/>
        <Route exact path="/challenge/:id" render={props => {
            const { id } = props.match.params;
            return (
                <div className="wrapper">
                    <Header {...props} page=""/>
                    <Challenge {...props} id={id}/>
                </div>
            )
        }}/>
    </Switch>
  );
};

export default App;
