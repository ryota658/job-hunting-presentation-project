import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { AttendanceManegementDay } from "../pages/AttendanceManegementDay";


export const RouterConfig =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="attendanceManegementDay" element={<AttendanceManegementDay />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}