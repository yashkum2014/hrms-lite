import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";

export default function App() {
  return (
    <div className="container">
      <h1>HRMS Lite</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/attendance/:id" element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
