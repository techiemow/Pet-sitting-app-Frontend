import React from 'react';
import carousel1 from "../assets/carousel1.jpg";
import carousel3 from "../assets/carousel3.jpg";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ position: "relative" }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={carousel1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carousel3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
        <div className="carousel-caption d-none d-md-block"  style={{ position:"absolute"}}>
          <button className="btn btn-primary btn-lg">Book Now</button>
          <button className="btn btn-secondary btn-lg">Read More</button>
        </div>
      </div>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
            <h4 className="text-secondary mb-3">About Us</h4>
            <h1 className="display-4 mb-4">
              <span className="text-primary">Boarding</span> & <span className="text-secondary">Daycare</span>
            </h1>
            <p className="lead fw-medium">
              At Paws & Claws Pet Care, we provide top-notch boarding and daycare services for your furry friends. Our state-of-the-art facility ensures that your pets are cared for in a safe, clean, and fun environment. Whether it's for a day or an extended stay, our professional staff is dedicated to providing the highest level of care, ensuring your pets feel at home while you're away. We offer a range of services including daily exercise, grooming, and socialization activities to keep your pets happy and healthy. Trust us to treat your pets like family, because they deserve the best!
            </p>
            <ul className="list-inline">
              <li>
                <h5><i className="fa fa-check-double font-monospace mr-3"></i><u>Best In Industry</u></h5>
              </li>
              <li>
                <h5><i className="fa fa-check-double font-monospace mr-3"></i><u>Emergency Services</u></h5>
              </li>
              <li>
                <h5><i className="fa fa-check-double font-monospace mr-3"></i><u>24/7 Customer Support</u></h5>
              </li>
            </ul>
            <a href="" className="btn btn-lg btn-primary mt-3 px-4">Learn More</a>
          </div>
          <div className="col-lg-5">
            <div className="row px-3">
              <div className="col-12 p-0">
                <img className="img-fluid w-100" src={about1} alt="" />
              </div>
              <div className="col-6 p-0">
                <img className="img-fluid w-100" src={about2} alt="" />
              </div>
              <div className="col-6 p-0">
                <img className="img-fluid w-100" src={about3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
