import React from "react";
import { connect } from "react-redux";
import { List, Avatar } from "antd";

const Recipes = ({ recipe }) => {
  return (
    <List
      dataSource={recipe.recipes}
      loading={recipe.isFetching}
      renderItem={item => (
        <List.Item key={item.title}>
          <List.Item.Meta
            title={
              <a href={item.href}>
                <h4>{item.title}</h4>
              </a>
            }
            avatar={<Avatar shape="square" size={96} src={item.thumbnail} />}
            description={item.ingredients}
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
