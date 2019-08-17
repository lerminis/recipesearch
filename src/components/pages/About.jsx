import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Descriptions, Icon, Button } from "antd";

const About = () => {
  return (
    <Fragment>
      <Descriptions
        title="About This App"
        bordered
        column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="Function">
          Searches the web for recipes
        </Descriptions.Item>
        <Descriptions.Item label="Front End">React</Descriptions.Item>
        <Descriptions.Item label="API">
          Edamam (Recipe Search)
        </Descriptions.Item>
        <Descriptions.Item label="UI Library">Ant Design</Descriptions.Item>
        <Descriptions.Item label="State Management">Redux</Descriptions.Item>
        <Descriptions.Item label="Routing">React-Router</Descriptions.Item>
        <Descriptions.Item label="Version">1.0.0</Descriptions.Item>
        <Descriptions.Item label="Year">2019</Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Link to="/">
        <Button type="primary" shape="round">
          <Icon type="left" /> Back to Home
        </Button>
      </Link>
    </Fragment>
  );
};

export default About;
