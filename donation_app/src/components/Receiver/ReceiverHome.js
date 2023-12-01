import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ReceiverHome() {
const navigate=useNavigate()
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/')
    }
  }, []);

  return (
    <div>
      <div className="receiiverhome">
        <div className="receiiverhomebody">
          <h3>We Are Here To Help You Don't Worry</h3>
          <p>
            Remember that receiving a blood transfusion is a medical
            intervention designed to restore health and well-being, and it's a
            testament to the incredible generosity of blood donors.{" "}
          </p>
          <p>
            Life is a gift, and the best way to honor that gift is by taking
            care of your health.
          </p>
          <div className="text-bold">
            Strength does not come from physical capacity. It comes from an
            indomitable will.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiverHome;
