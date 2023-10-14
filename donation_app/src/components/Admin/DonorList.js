import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DonorList() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/admin_dashboard");
  }
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/donor_list")
      .then((donors) => setDonors(donors.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(donors);

  return (
    <div className="list ">
      <div className="p-5">
        <h3 className="text-center ">Donor List</h3>
        {donors.map((donor) => {
          return<div className="donordetails">
            <div>Donor Name : {donor.donor_name} </div>
            <div>Donor Age : {donor.donor_age}</div>
            <div>Donor mobile : {donor.donor_mobile} </div>
            <div>Donor Organ : {donor.donor_organ} </div>
            <div>Donor Blood Group : {donor.donor_blood} </div>
            <div>Donor Address : {donor.donor_address} </div>

            <button type="submit" className="btn btn-danger ">
              Remove
            </button>
            <button type="submit" className="btn btn-success ms-5">
              Edit
            </button>
            <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary ms-5"
          >
            Back
          </button>
          </div>;
        })}
      </div>
    </div>
  );
}

export default DonorList;
// <th>Donor Name</th>
//               <th>Donor Age</th>
//               <th>Donor mobile</th>
//               <th>Donate Organ</th>
//               <th>Donor Blood Group</th>
//               <th>Donor Address</th>
