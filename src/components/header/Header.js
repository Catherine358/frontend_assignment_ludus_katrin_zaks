import React from "react";
import Grid from "@material-ui/core/Grid";
import './header.scss';
import SearchField from "./SearchField";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center" className="header">
          <div className="nav-container">
              <Link to="/">
                <span className={ page === "main" ? "active" : "" }>All Challenges</span>
              </Link>
              <Link to="/favourites">
                  <span className={ page === "fav" ? "active" : "" }>Favourite Challenges</span>
              </Link>
          </div>
          { page === "main" && <SearchField/> }
      </Grid>
    );
};

export default Header;
