import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import AdminLogin from "./components/Admin/Admin_login";
import AdminDashboard from "./components/Admin/AdminDashboard";

import Login from "./components/Login";
import Navgation from "./components/Home/Navgation";
import Footer from "./components/Home/Footer";

import DonorRegister from "./components/Donor/Donor_register";
import DonorDash from "./components/Donor/DonorDash";
import DonorList from "./components/Admin/DonorList";
import DonorNotification from "./components/Donor/DonorNotification";
import DonorHome from "./components/Donor/DonorHme";
import DonorProfile from "./components/Donor/DonorProfile";
import DonorLogin from "./components/Donor/Donor_login";
import DonorEdit from "./components/Donor/Donor_Edit";

import ReceiverLogin from "./components/Receiver/Receiver_login";
import ReceiverRegister from "./components/Receiver/Receiver_register";
import ReceiverDash from "./components/Receiver/ReceiverDash";
import ReceiverList from "./components/Admin/ReceiverList";
import ReceiverProfile from "./components/Receiver/Receiver_profile";
import ReceiverHome from "./components/Receiver/ReceiverHome";
import ReceiverEdit from "./components/Receiver/ReceiverEdit";
import Request from "./components/Receiver/Request";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="admin_login" element={<AdminLogin />} />
        <Route path="Login" element={<Login />} />
        <Route path="Navigation" element={<Navgation />} />
        <Route path="footer" element={<Footer />} />

        <Route path="donor_login" element={<DonorLogin />} />
        <Route path="donor_register" element={<DonorRegister />} />
        <Route path="admin_dashboard" element={<AdminDashboard />} />
        <Route path="donor_dashboard" element={<DonorDash />} />
        <Route path="donor_home" element={<DonorHome />} />
        <Route path="donor_list" element={<DonorList />} />
        <Route path="donor_notification" element={<DonorNotification />} />
        <Route path="donor_profile/:id" element={<DonorProfile />} />
        <Route path="donor_edit/:id" element={<DonorEdit/>} />

        <Route path="receiver_register" element={<ReceiverRegister />} />
        <Route path="receiver_dashboard" element={<ReceiverDash />} />
        <Route path="receiver_list" element={<ReceiverList />} />
        <Route path="receiver_login" element={<ReceiverLogin />} />
        <Route path="receiver_home" element={<ReceiverHome />} />
        <Route path="receiver_profile/:id" element={<ReceiverProfile />} />
        <Route path="receiver_edit/:id" element={<ReceiverEdit />} />
        <Route path="receiver_request" element={<Request/>}/>
      </Routes>
    </div>
  );
}

export default App;
