import React from 'react';
import { Link } from 'react-router';
import Icon from 'react-fa';
import './style.css';
import './bootstrap.css';
// import './flexslider.css';

import facebook from  '../../../public/dist/img/Social/facebook.png';
import google from '../../../public/dist/img/Social/google-plus.png';
import twitter from '../../../public/dist/img/Social/twitter.png';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="home-sec" id="home" >
          <div className="overlay">
            <div className="container">
              <div className="row text-center " >

                <div className="col-lg-12  col-md-12 col-sm-12">

                  <div className="flexslider set-flexi" id="main-section" >
                    <ul className="slides move-me">
                      <li>
                        <h3>Delivering Quality Education</h3>
                        <h1>THE UNIQUE METHOD</h1>
                          <Link to="/login" className="btn btn-info btn-lg">LOGIN</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div  className="tag-line" >
          <div className="container">
            <div className="row  text-center" >

              <div className="col-lg-12  col-md-12 col-sm-12">
                <h2 data-scroll-reveal="enter from the bottom after 0.1s" ><i className="fa fa-circle-o-notch"></i> WELCOME TO SIE INTERNSHIP WEBSITE <i className="fa fa-circle-o-notch"></i> </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="features-sec" className="container set-pad" >
          <div className="row text-center">
            <div className="col-lg-8 col-lg-offset-2 col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
              <h1 data-scroll-reveal="enter from the bottom after 0.2s"  className="header-line">FEATURE LIST </h1>
              <p data-scroll-reveal="enter from the bottom after 0.3s" >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo.
              </p>
            </div>

          </div>


          <div className="row" >


            <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
              <div className="about-div">
                <i className="fa fa-info fa-4x icon-round-border" ></i>
                <h3 >About Internship Term</h3>
                <hr />
                <hr />
                <p >
                  You can see all information about internship term here.

                </p>
                <a href="#" className="btn btn-info btn-set" >ASK THE EXPERT</a>
              </div>
            </div>
            <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.5s">
              <div className="about-div">
                <i className="fa fa-book fa-4x icon-round-border" ></i>
                <h3 >About Internship Topics</h3>
                <hr />
                <hr />
                <p >
                  You can see all internship topic of this term here.

                </p>
                <a href="#" className="btn btn-info btn-set"  >ASK THE EXPERT</a>
              </div>
            </div>
            <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.6s">
              <div className="about-div">
                <i className="fa fa-user fa-4x icon-round-border" ></i>
                <h3 >All Intructor Teachers</h3>
                <hr />
                <hr />
                <p >
                  You can see each instuctor teacher for each topic here.
                </p>
                <a href="#" className="btn btn-info btn-set"  >ASK THE EXPERT</a>
              </div>
            </div>


          </div>
        </div>
        <div className="container">
          <div className="row set-row-pad"  >
            <div className="col-lg-4 col-md-4 col-sm-4   col-lg-offset-1 col-md-offset-1 col-sm-offset-1 " data-scroll-reveal="enter from the bottom after 0.4s">

              <h2 ><strong>Our Location </strong></h2>
              <hr />
              <div>
                        <h4>Room 201, D7 Building, HUST | No.1, Dai Co Viet Street, Hanoi, Vietnam.</h4>
                        <h4><strong>Tel:</strong>(+84)04.3868.3407 &amp; 3868.2261 | <strong>Fax:</strong>(+84)04.3868.3409</h4>
                        <h4><strong>Email: </strong>info@sie.edu.vn</h4>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-4 col-sm-4   col-lg-offset-1 col-md-offset-1 col-sm-offset-1" data-scroll-reveal="enter from the bottom after 0.4s">

                    <h2 ><strong>Social Conectivity </strong></h2>
        <hr />
                    <div >
                        <a href="#"> <img className="social_img" src={facebook} alt="" /> </a>
                        <a href="#"> <img className="social_img" src={google} alt="" /></a>
                        <a href="#"> <img className="social_img" src={twitter} alt="" /></a>
                    </div>
                  </div>
                </div>
            </div>
      </div>

    )
  }
}

export default HomePage;