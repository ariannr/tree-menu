// CustomLayout.js
import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const CustomLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} theme="dark">
        <Menu theme="dark" mode="vertical">
          <Menu.SubMenu key="dashboard" title="Dashboard">
            <Menu.Item key="dashboard1">
              <Link to="/">Dashboard 1</Link>
            </Menu.Item>
            <Menu.Item key="dashboard2">
              <Link to="/dashboard2">Dashboard 2</Link>
            </Menu.Item>
          </Menu.SubMenu>
          //////////
          <Menu.SubMenu key="users" title="Users">
            <Menu.Item key="userList">
              <Link to="/users">User List</Link>
            </Menu.Item>
            <Menu.Item key="addUser">
              <Link to="/users/add">Add User</Link>
            </Menu.Item>
            ////////////
            <Menu.SubMenu key="userActions" title="User Actions">
              <Menu.Item key="editUser">
                <Link to="/users/edit">Edit User</Link>
              </Menu.Item>
              <Menu.Item key="deleteUser">
                <Link to="/users/delete">Delete User</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu>
      </Sider>
    </Layout>
  );
};

CustomLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomLayout;
