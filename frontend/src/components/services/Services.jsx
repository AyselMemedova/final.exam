import React from 'react'
import { Link } from 'react-router-dom'
import "./Services.css"
function Services() {
    return (
        <div>
            <div className='servis_text'>
                <p>OUR SERVICES</p>
                <h3>We Offer Services</h3>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-8 col-sm-12 card">
                        <div className='services_card_icon'>
                            <i id='services' class="fa-solid fa-chart-pie"></i>

                        </div>

                        <div className='services_card_text'>
                            <h5>Business Consulting</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <Link>Learn More</Link>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-8 col-sm-12 card">
                        <div className='services_card_icon'>
                        <i id='services' class="fa-solid fa-delete-left"></i>

                        </div>

                        <div className='services_card_text'>
                            <h5>Market Analysis</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <Link>Learn More</Link>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-8 col-sm-12 card">
                        <div className='services_card_icon'>
                        <i id='services' class="fa-regular fa-clock"></i>

                        </div>

                        <div className='services_card_text'>
                            <h5>User Monitoring</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <Link>Learn More</Link>
                        </div>

                    </div>
                    
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-8 col-sm-12 card">
                        <div className='services_card_icon'>
                            <i id='services' class="fa-solid fa-chart-pie"></i>

                        </div>

                        <div className='services_card_text'>
                            <h5>Business Consulting</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <Link>Learn More</Link>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-8 col-sm-12 card">
                        <div className='services_card_icon'>
                        <i id='services' class="fa-solid fa-delete-left"></i>

                        </div>

                        <div className='services_card_text'>
                            <h5>Market Analysis</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <Link>Learn More</Link>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-8 col-sm-12 card">
                        <div className='services_card_icon'>
                        <i id='services' class="fa-regular fa-clock"></i>

                        </div>

                        <div className='services_card_text'>
                            <h5>User Monitoring</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                            <Link>Learn More</Link>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Services