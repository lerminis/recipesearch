export const CLEAR_RECIPES = "CLEAR_RECIPES";
export const REQUEST_RECIPES = "REQUEST_RECIPES";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

export const clearRecipes = () => ({
  type: CLEAR_RECIPES
});

export const requestRecipes = () => ({
  type: REQUEST_RECIPES
});

export const receiveRecipes = json => ({
  type: RECEIVE_RECIPES,
  payload: json.results
});

export const fetchRecipes = (ingredients, dish) => dispatch => {
  dispatch(requestRecipes());
  return fetch(`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`)
    .then(response => response.json())
    .then(json => dispatch(receiveRecipes(json)));
};
