import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions";

const Search = ({ fetchRecipes }) => {
  const [ingredients, setIngredients] = useState("");
  const [dish, setDish] = useState("");

  return (
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
          size="large"
          htmlType="submit"
          onClick={() => fetchRecipes(ingredients, dish)}
        >
          Find Recipes!
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(
  null,
  { fetchRecipes }
)(Search);
