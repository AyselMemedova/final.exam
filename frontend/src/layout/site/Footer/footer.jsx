
import React from 'react'
import "./footer.css"

const Footer = () => {
return (
    <div>
        <div className="container">
            <div className="row footer_all">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className='footer_card1'>
                        <h3>ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>

                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Testominal</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3>FOLLOW US</h3>
                    <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3>FEATURED PRODUCT</h3>
                    <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" />
                    <p>Leather Brown Shoe</p>
                    <span>$60.00</span>
                    <br />
                    <button>Add To Card</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer
                    