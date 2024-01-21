import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

import EmployeeDashboard from "./pages/EmployeeDashboard";
import AttendanceRequest from "./pages/AttendanceRequest";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<WithSidebar />}>
            <Route index element={<EmployeeDashboard />} />
            <Route path="attendance">
              <Route path="myAttendance" element={<h1>MyAttendance</h1>} />
              <Route path="AttendanceRequest" element={<AttendanceRequest />} />
              <Route path="shift" element={<h1>shift</h1>} />
              <Route path="remoteWork" element={<h1>Remote Work</h1>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

const WithSidebar = () => {
  return (
    <SideBar>
      <Outlet />
    </SideBar>
  );
};

export default App;
