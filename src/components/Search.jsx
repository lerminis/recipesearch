import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: "",
      dish: ""
    };
  }

  search() {
    const { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    fetch(url, {
      method: "GET"
    })
      .then(res => res.json)
      .then(json => console.log(json));
  }

  render() {
    return (
      <Form>
        <Form.Item label="Ingredients">
          <Input
            prefix={<Icon type="read" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="text"
            placeholder="garlic, chicken"
            onChange={e => this.setState({ ingredients: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Dish">
          <Input
            prefix={<Icon type="fire" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="text"
            placeholder="adobo"
            onChange={e => this.setState({ dish: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => this.search()}
          >
            Find Recipes!
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Search;
