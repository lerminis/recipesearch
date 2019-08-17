import React from "react";
import { connect } from "react-redux";
import { List, Avatar, Icon } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Recipes = ({ recipe }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={recipe.recipes}
      loading={recipe.isFetching}
      renderItem={item => (
        <List.Item
          key={item.recipe.uri}
          actions={[
            <IconText
              type="number"
              text={`Yield: ${Math.trunc(item.recipe.yield)}`}
              key="1"
            />,
            <IconText
              type="star"
              text={`Calories: ${Math.trunc(item.recipe.calories)}kcal`}
              key="2"
            />,
            <IconText
              type="gold"
              text={`Weight: ${Math.trunc(item.recipe.totalWeight)}g`}
              key="3"
            />
          ]}
        >
          <List.Item.Meta
            title={
              <a href={item.recipe.url}>
                <h4>{item.recipe.label}</h4>
              </a>
            }
            avatar={<Avatar shape="square" size={96} src={item.recipe.image} />}
            description={item.recipe.ingredientLines}
          />
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  null
)(Recipes);
