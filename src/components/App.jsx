import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Layout, Button, Icon } from "antd";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%"
          }}
        >
          <Link to="/">
            <h2 style={{ color: "#fff", float: "left" }}>
              <Icon type="fire" theme="twoTone" /> RecipeSearch
            </h2>
          </Link>
          <Link to="/about">
            <Button
              style={{ float: "right", marginTop: "16px" }}
              type="link"
              ghost
            >
              About
            </Button>
          </Link>
        </Header>
        <Content style={{ padding: 50, textAlign: "center", marginTop: 64 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center", opacity: 0.5 }}>
          Stephen Lerminiaux ©2019 using Ant Design
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
