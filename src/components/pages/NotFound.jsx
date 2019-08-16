import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Icon, Button } from "antd";

const NotFound = () => {
  return (
    <Fragment>
      <h1>
        <Icon type="exclamation-circle" /> Oops!
      </h1>
      <br />
      <h3>The page you are looking for does not exist!</h3>
      <br />
      <Link to="/">
        <Button type="primary" shape="round">
          <Icon type="left" /> Back to Home
        </Button>
      </Link>
    </Fragment>
  );
};

export default NotFound;
