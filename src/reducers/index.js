import { combineReducers } from "redux";
import { RECEIVE_RECIPES, REQUEST_RECIPES, CLEAR_RECIPES } from "../actions";

const initialState = {
  recipes: [],
  isFetching: false
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        isFetching: false
      };
    case REQUEST_RECIPES:
      return {
        ...state,
        isFetching: true
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: [],
        isFetching: false
      };
    default:
      return state;
  }
};

export default combineReducers({ recipe: recipeReducer });
