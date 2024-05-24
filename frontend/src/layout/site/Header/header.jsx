
import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"

const Header = () => {
return (
    <div>
    <div className="header_all">
      <div>
        <div className="container">
          <div className="row header_ust">
              <div className="col-lg-6 col-sm-12 icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>

              <div className="col-lg-6 col-sm-12 right">
                <i class="fa-solid fa-phone"></i>
                <p>(+1) 234 5678 9101</p>
                <i class="fa-solid fa-envelope"></i>
                <p> shop@yourdomain.com</p>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="row headr_alt">
            <div className="col-lg-5  col-sm-12">
              <h1>
                Selling <span>.</span>
              </h1>
            </div>
            <div className="col-lg-7 col-sm-12">
              <ul>
                <li id="home"> <Link to={"/"}>Home</Link> </li>
                <li><Link to={"/basket"}>Basket</Link></li>
                <li><Link to={"/wishlist"}>Wishlist</Link></li>
                <li>Special</li>
                <li>Testimonials</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Header
                            