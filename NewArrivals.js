import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { NavLink } from "react-router-dom";


const NewArrivals = () => {
  return (
    <>
      <div>
        <Card
          className="w-60 "
          style={{
            // width: "50rem"

            textAlign: "center",
          }}>
          <div class="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
              <h5 class="card-title display-3 fw-bolder mb-0">
                New Seasonal Arrivels
              </h5>
              <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              <NavLink to={"/products"} className="btn btn-dark ms-2">
                Check Out the New Arrivals
              </NavLink>
            </div>
          </div>

          <img alt="Sample" src="/assets/hero-back2.jpg" />
        </Card>
      </div>
      <div>
        <Card
          style={{
            // width: "50rem",
            textAlign: "center",
          }}>
          <div class="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
              <h5 class="card-title display-3 fw-bolder mb-0">
                New Seasonal Arrivels
              </h5>
              <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              <NavLink to={"/products"} className="btn btn-dark ms-2">
                Check Out the New Arrivals
              </NavLink>
            </div>
          </div>
          <img alt="Sample" src="/assets/hero-back.jpg" />
        </Card>
      </div>
      <div>
        <Card
          style={{
            //  width: "50rem",
            textAlign: "center",
          }}>
          <div class="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
              <h5 class="card-title display-3 fw-bolder mb-0">
                New Seasonal Arrivels
              </h5>
              <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              <NavLink to={"/products"} className="btn btn-dark ms-2">
                Check Out the New Arrivals
              </NavLink>
            </div>
          </div>
          <img alt="Sample" src="/assets/hero-back3.jpg" />
        </Card>
      </div>
    </>
  );
};

export default NewArrivals;
