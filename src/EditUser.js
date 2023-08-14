// EditUser.js
import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { useParams, useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditUser = () => {
  const { userId } = useParams(); // Get the user ID from the route params
  const history = useHistory();

  // Simulated user data (replace with actual data fetch)
  const [user, setUser] = useState({ id: userId, name: "", email: "" });

  useEffect(() => {
    // Simulated API call to fetch user data by ID
    // Replace this with an actual API call
    const fetchUserById = async () => {
      try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserById();
  }, [userId]);

  const onFinish = (values) => {
    // Simulated API call to update user data
    // Replace this with an actual API call
    console.log("Updated values:", values);
    message.success("User updated successfully");
    history.push("/users"); // Redirect to user list after updating
  };

  return (
    <div>
      <h1>Edit User</h1>
      <Form
        {...layout}
        name="editUser"
        initialValues={user} // Set initial values from fetched user data
        onFinish={onFinish}
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
            Update User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUser;
