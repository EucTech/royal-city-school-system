// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './Pages/AdminLogin'
import StudentProfile from './components/StudentProfile/StudentProfile'
import Dashboard from './components/Dashboard/Dashboard'
import Courses from './components/Courses/Courses'
import Notice from './components/Notice/Notice'
import Result from './components/Result/Result'
import PaymentInfo from './components/PaymentInfo/PaymentInfo'
import Schedule from './components/Schedule/Schedule'
import TeacherProfile from './components/TeacherProfile/TeacherProfile'

const LayoutComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/student-info" element={<StudentProfile/>} />
        <Route path="/dashboard/courses" element={<Courses/>} />
        <Route path="/dashboard/notice" element={<Notice/>} />
        <Route path="/dashboard/result" element={<Result/>} />
        <Route path="/dashboard/payment-info" element={<PaymentInfo/>} />
        <Route path="/dashboard/schedule" element={<Schedule/>} />
        <Route path="/dashboard/teacher-info" element={<TeacherProfile/>} />
      </Routes>
    </div>
  )

}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin/>} />
          <Route path="/*" element={<LayoutComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
