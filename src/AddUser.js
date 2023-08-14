// AddUser.js
import React from "react";
import { Form, Input, Button, message } from "antd";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddUser = () => {
  const history = useHistory();

  const onFinish = (values) => {
    // Here you would typically send the user data to your API
    console.log("Received values:", values);
    message.success("User added successfully");
    history.push("/users"); // Redirect to user list after adding
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Failed to add user");
  };

  return (
    <div>
      <h1>Add User</h1>
      <Form
        {...layout}
        name="addUser"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter the email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;
