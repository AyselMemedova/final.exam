import React from 'react'
import"./About.css"

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row about">
                    <div className="col-md-8 col-sm-12 about_img">
                       <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
                       <div className='about_img_text'>
                       <h3>Trusted Merchant</h3>
                        <p>FOR 50 YEARS</p>
                       </div>
                        
                    </div>

                    <div className="col-lg-4 col-md-8 col-sm-12 about_text">
                        <span>MERCHANT COMPANY</span>
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
                        <button id='learn_more'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About