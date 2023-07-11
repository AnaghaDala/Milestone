import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundColor: '#7be0eb' }}>
      <h3 className="text-center">Welcome to Kite Travels</h3>
      <h5 className="text-center">We plan Your Stay!!!!</h5>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-light">
              <div className="card-header bg-info text-center">
                <h1>Travel With Us</h1>
              </div>
              <div className="card-body">
                <p className="card-text">
                  We are a travel agency that specializes in hiking, trekking, and mountaineering. We offer a wide range of tours and trips all over the world, throughout all seasons.
                </p>
                <p className="card-text">
                  Our company was founded by experienced trekkers who have been traveling the world for many years. We decided to create our own company because we wanted to share our passion with others by offering them unforgettable experiences.
                </p>
                <p className="card-text">
                  Our experienced team will work with you to plan your trip based on your level, location preferences, and budget. From hiking tours along the Appalachian Trail to kayaking through the Everglades, we'll find the perfect adventure for you.
                </p>
                <p className="card-text">
                  We work with local guides, who know the area like the back of their hand and can help you find the best spots for hiking.
                </p>
              </div>
              <div className="card-footer bg-primary text-center">
                <a href="https://www.discovernow-india.com/?gclid=EAIaIQobChMItZOghu6DgAMVCppmAh0K3gzaEAAYASAAEgLNR_D_BwE" className="btn btn-outline-danger">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;