import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { connect } from "react-redux";
import { fetchRecipes, clearRecipes } from "../../actions";

const { Option } = Select;

const Search = ({ fetchRecipes, clearRecipes, recipe }) => {
  const [dish, setDish] = useState("");
  const [healthLabels, setHealthLabels] = useState([]);
  const [dietLabels, setDietLabels] = useState([]);

  return (
    <div>
      <Form>
        <Form.Item label="Enter a Dish">
          <Input
            type="text"
            placeholder="E.g. pizza"
            required
            onChange={e => setDish(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Select a Health Restriction">
          <Select
            mode="multiple"
            placeholder="Please select an option"
            onChange={value => setHealthLabels(value)}
          >
            <Option value="vegan">Vegan</Option>
            <Option value="vegetarian">Vegetarian</Option>
            <Option value="peanut-free">Peanut-free</Option>
            <Option value="tree-nut-free">Tree-Nut-free</Option>
            <Option value="alcohol-free">Alcohol-free</Option>
            <Option value="sugar-conscious">Sugar-conscious</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select a Diet Restriction">
          <Select
            mode="multiple"
            placeholder="Please select an option"
            onChange={value => setDietLabels(value)}
          >
            <Option value="balanced">Balanced</Option>
            <Option value="high-protein">High-Protein</Option>
            <Option value="low-fat">Low-Fat</Option>
            <Option value="low-carb">Low-Carb</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            shape="round"
            icon="search"
            htmlType="submit"
            onClick={
              () =>
                fetchRecipes(
                  dish,
                  healthLabels.join("&health="),
                  dietLabels.join("&diet=")
                ) // Joining arrays to easily submit multiple labels to the api call
            }
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
