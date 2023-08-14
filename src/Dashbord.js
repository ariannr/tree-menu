// Dashboard.js
import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Link to="/users">
            <Card title="User Management" hoverable>
              Manage your application's users here.
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/products">
            <Card title="Product Management" hoverable>
              Manage your application's products here.
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/orders">
            <Card title="Order Management" hoverable>
              Manage your application's orders here.
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
