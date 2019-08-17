export const CLEAR_RECIPES = "CLEAR_RECIPES";
export const REQUEST_RECIPES = "REQUEST_RECIPES";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

let edamamClientId;
let edamamClientKey;
let healths = "";
let diets = "";

if (process.env.NODE_ENV !== "production") {
  edamamClientId = process.env.REACT_APP_EDAMAM_CLIENT_ID;
  edamamClientKey = process.env.REACT_APP_EDAMAM_CLIENT_KEY;
} else {
  edamamClientId = process.env.EDAMAM_CLIENT_ID;
  edamamClientKey = process.env.EDAMAM_CLIENT_KEY;
}

export const clearRecipes = () => ({
  type: CLEAR_RECIPES
});

export const requestRecipes = () => ({
  type: REQUEST_RECIPES
});

export const receiveRecipes = json => ({
  type: RECEIVE_RECIPES,
  payload: json.hits
});

export const fetchRecipes = (
  dish,
  healthLabels,
  dietLabels
) => async dispatch => {
  dispatch(requestRecipes());
  if (healthLabels.length) healths = "&health=" + healthLabels;
  if (dietLabels.length) diets = "&diet=" + dietLabels;
  const url = `https://api.edamam.com/search?q=${dish}&app_id=${edamamClientId}&app_key=${edamamClientKey}${healths}${diets}`;
  const response = await fetch(url);
  const json = await response.json();
  return dispatch(receiveRecipes(json));
};
