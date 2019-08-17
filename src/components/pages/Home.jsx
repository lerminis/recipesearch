import React, { Fragment } from "react";
import Search from "../recipes/Search";
import Recipes from "../recipes/Recipes";

const Home = () => (
  <Fragment>
    <div style={{ paddingBottom: 25 }}>
      <h2>Lettuce find you the perfect recipe...</h2>
      <h4>Fill out the following form and get cooking!</h4>
    </div>
    <div className="searchbox-content">
      <Search />
      <Recipes />
    </div>
  </Fragment>
);

export default Home;
