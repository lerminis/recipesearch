import React, { Fragment } from "react";
import Search from "../recipes/Search";
import Recipes from "../recipes/Recipes";

const Home = () => (
  <Fragment>
    <div style={{ paddingBottom: 25 }}>
      <h3>Search for recipes below!</h3>
      <p>
        Enter a comma-separated list of ingredients and a Dish to Search the web
        for recipes!
      </p>
    </div>
    <div className="searchbox-content">
      <Search />
      <Recipes />
    </div>
  </Fragment>
);

export default Home;
