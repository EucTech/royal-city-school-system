// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./Pages/AdminLogin";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import Dashboard from "./components/Dashboard/Dashboard";
import Courses from "./components/Courses/Courses";
import Notice from "./components/Notice/Notice";
// import Result from "./components/Result/Result";
// import PaymentInfo from "./components/PaymentInfo/PaymentInfo";
// import Schedule from "./components/Schedule/Schedule";
// import TeacherProfile from "./components/TeacherProfile/TeacherProfile";
import Layout from "./components/Layout";
import ProtectedRoute from "./protectRoutes";
import { Toaster } from "react-hot-toast";
import NotFound from "./Pages/NotFound";
import StudentSignUp from "./Pages/StudentSignUp";

interface ToasterProps {
  position: "top-right" | "bottom-right" | "top-left" | "bottom-left"; 
  reverseOrder?: boolean; 
  duration?: number; 
}

const toastProps: ToasterProps = {
  position: "top-right",
  reverseOrder: true,
  duration: 4000,
};

const LayoutComponent = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/student-info" element={<StudentProfile />} />
          <Route path="/dashboard/courses" element={<Courses />} />
          <Route path="/dashboard/notice" element={<Notice />} />
          {/* <Route path="/dashboard/result" element={<Result />} /> */}
          {/* <Route path="/dashboard/payment-info" element={<PaymentInfo />} /> */}
          {/* <Route path="/dashboard/schedule" element={<Schedule />} /> */}
          {/* <Route path="/dashboard/teacher-info" element={<TeacherProfile />} /> */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/student-login" element={<AdminLogin />} />
          <Route path="/student-signup" element={<StudentSignUp/>} />
          <Route path="/*" element={<ProtectedRoute component={LayoutComponent}/>} />
        </Routes>
      </BrowserRouter>
      <Toaster {...toastProps} />
    </div>
  );
};

export default App;
