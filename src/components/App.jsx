import React from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import { Layout, Icon } from "antd";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <h2 style={{ color: "#fff" }}>
          <Icon type="search" /> Recipe Finder
        </h2>
      </Header>
      <Content style={{ padding: 50, textAlign: "center" }}>
        <div style={{ paddingBottom: 25 }}>
          <h3>Search for recipes below!</h3>
          <p>
            Enter a comma-separated list of ingredients and a Dish to Search the
            web for recipes!
          </p>
        </div>
        <div
          style={{
            background: "#fff",
            padding: 25,
            maxWidth: 800,
            margin: "auto"
          }}
        >
          <Search />
          <Recipes />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
