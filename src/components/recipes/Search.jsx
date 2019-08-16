import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { fetchRecipes, clearRecipes } from "../../actions";

const Search = ({ fetchRecipes, clearRecipes, recipe }) => {
  const [ingredients, setIngredients] = useState("");
  const [dish, setDish] = useState("");

  return (
    <div>
      <Form>
        <Form.Item label="Ingredients">
          <Input
            prefix={<Icon type="read" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="text"
            placeholder="eggs, sauce"
            onChange={e => setIngredients(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Dish">
          <Input
            prefix={<Icon type="fire" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="text"
            placeholder="lasagna"
            onChange={e => setDish(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            shape="round"
            icon="search"
            htmlType="submit"
            onClick={() => fetchRecipes(ingredients, dish)}
          >
            Find Recipes
          </Button>
        </Form.Item>
      </Form>
      {recipe.recipes.length > 0 && (
        <Button
          style={{ marginBottom: 32 }}
          type="danger"
          shape="round"
          icon="delete"
          onClick={() => clearRecipes()}
        >
          Clear
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchRecipes, clearRecipes }
)(Search);
