// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EmployeeDashboard from "./pages/EmployeeDashboard";
import MyAttendance from "./pages/MyAttendance";
import AttendanceRequest from "./pages/AttendanceRequest";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <SideBar>
          <Routes>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route path="/attendance/myAttendance" element={<MyAttendance />} />
            <Route path="/attendance/AttendanceRequest" element={<AttendanceRequest />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </Provider>
  );
}

export default App;



// import "./App.css";
// import SideBar from "./components/sidebar/SideBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import EmployeeDashboard from "./pages/EmployeeDashboard";
// // import Attendance from "./pages/Attendance";
// import MyAttendance from "./pages/MyAttendance";
// import AttendanceRequest from "./pages/AttendanceRequest";
// import Login from "./pages/Login";



// function App() {
//   return (
//     <Router>
//       <Routes>
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       <SideBar>
//         <Routes>
//           <Route path="/" element={<EmployeeDashboard />} />
//           {/* <Route path="/attendance" element={<Attendance />} /> */}
//           <Route path="/attendance/myAttendance" element={<MyAttendance />} />
//           <Route path="/attendance/AttendanceRequest" element={<AttendanceRequest />} />
//           <Route path="*" element={<> not found</>} />
//         </Routes>
//       </SideBar>
//     </Router>
//   );
// }

// export default App;