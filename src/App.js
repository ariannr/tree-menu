import React from "react";
import { Admin, Resource } from "react-admin";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomLayout from "./CustomLayout";
import Dashboard from "./Dashbord";
import Dashboard2 from "./Dashbord2";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const App = () => {
  return (
    <Router>
      <Admin layout={CustomLayout}>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard2" component={Dashboard2} />
        <Resource name="users" list={UserList} />
        <Resource name="addUser" component={AddUser} />

        <Route path="/users/edit" component={EditUser} />
      </Admin>
    </Router>
  );
};

export default App;
