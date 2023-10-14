import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import AdminLogin from "./components/Admin/Admin_login";
import DonorLogin from "./components/Donor/Donor_login";
import ReceiverLogin from "./components/Receiver/Receiver_login";
import Nav from "./components/Nav";
import ReceiverRegister from "./components/Receiver/Receiver_register";
import DonorRegister from "./components/Donor/Donor_register";
import AdminDashboard from "./components/Admin/AdminDashboard";
import DonorDash from "./components/Donor/DonorDash";
import ReceiverDash from "./components/Receiver/ReceiverDash";
import DonorList from "./components/Admin/DonorList";
import ReceiverList from "./components/Admin/ReceiverList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="admin_login" element={<AdminLogin />} />
        <Route path="donor_login" element={<DonorLogin />} />
        <Route path="donor_register" element={<DonorRegister />} />
        <Route path="receiver_login" element={<ReceiverLogin />} />
        <Route path="receiver_register" element={<ReceiverRegister />} />
        <Route path="nav" element={<Nav />} />
        <Route path="admin_dashboard" element={<AdminDashboard />} />
        <Route path="donor_dashboard" element={<DonorDash />} />
        <Route path="receiver_dashboard" element={<ReceiverDash />} />
        <Route path="donor_list" element={<DonorList />} />
        <Route path="receiver_list" element={<ReceiverList />} />
      </Routes>
    </div>
  );
}

export default App;
