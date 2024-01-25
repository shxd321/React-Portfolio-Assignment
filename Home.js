import React from "react";
import Carousal from "./Carousal";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";



const Home = () => {
  return (
    <>
    


    <Carousal />
    {/* <div className="hero">
      <div class="card text-bg-dark border-0">
        <img
          src="/assets/hero-back.jpg"
          class="card-img"
          alt="Background" height='600px'
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
          <h5 class="card-title display-3 fw-bolder mb-0">New Seasonal Arrivels</h5>
          <p class="card-text lead fs-2">
          CHECK OUT ALL THE TRENDS
          </p>

          </div>
         
        </div>
      </div>
    
    </div> */}
    </>
  );
};

export default Home;
