import React ,{useEffect}from "react";
import { useNavigate } from "react-router-dom";

function DonorHme() {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate('/')
    }
  })

  return (
    <div className="donorhome">
      <div className="donorhomebody">
        <h3>Giving A Second Chance Of Life Is In Your Hands</h3>
        <p>
          "The act of donating blood is an act of profound kindness, compassion,
          and generosity. It's a selfless gift that costs nothing but means
          everything to someone in need. Every drop of blood you donate has the
          potential to save a life and bring hope to those facing challenging
          medical conditions. Be a part of this noble cause and make a
          difference – donate blood today."
        </p>
      </div>
    </div>
  );
}

export default DonorHme;
