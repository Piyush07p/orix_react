import React from 'react'
import '../css/style.css'
import '../css/magic-mouse.css'
import '../css/aos.css'
import '../css/simple-line-icons.css'
import '../css/responsive.css'
import '../css/color.css'
import '../css/perfect-scrollbar.css'
import '../css/nice-select.css'
import '../css/jquery.fancybox.min.css'
import '../css/owl.theme.default.min.css'
import '../css/owl.carousel.min.css'
import '../css/owl.carousel.min.css'

import Spinner from './Spinner'
// import '../css/animating.css'


//packages
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <Spinner/>
            <header className="two three" id="stickyHeader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2">
                            <div className="logo-icon">
                                <a className="magic-hover magic-hover__square" href="index.html">
                                    <img className="light" src="./assets/img/orix-logo.png" alt="logo" />
                                    <img className="drak" src="./assets/img/black-logo.png"alt="logo" />
                                </a>
                                <a href="" className="bar-menu magic-hover magic-hover__square"><i className="fa-solid fa-bars"></i></a>
                            </div>

                        </div>
                        <div className="col-xl-7">
                            <div className="menu-bar">
                                <nav>
                                    <ul>
                                        <li className="menu-item-has-children"><a className="magic-hover magic-hover__square" href="#">Home</a>

                                            <ul>
                                                <li><Link className="magic-hover magic-hover__square" to="/">Home 1</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/home2">Home 2 </Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/home3">Home 3 </Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/home4">Home 4 ( Light )</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/home4Dark">Home 4 ( Dark )</Link></li>

                                            </ul>
                                        </li>


                                        <li className="menu-item-has-children"><a className="magic-hover magic-hover__square" href="#">Services</a>
                                            <ul>
                                                <li><Link className="magic-hover magic-hover__square" to="/services">Services</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/serviceDetail">Services Details</Link></li>
                                            </ul>
                                        </li>

                                        <li className="menu-item-has-children"><a className="magic-hover magic-hover__square" href="#">Portfolio</a>
                                            <ul>
                                                <li><Link className="magic-hover magic-hover__square" to="/portfolio1">Portfolio 1</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/portfolio2">Portfolio 2</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/portfolio3">Portfolio 3</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a className="magic-hover magic-hover__square" href="#">Blog</a>
                                            <ul>
                                                <li><Link className="magic-hover magic-hover__square" to="/blog">Our Blog</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/BlogDetail1">Blog Details 1</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/BlogDetail2">Blog Details 2</Link></li>

                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a className="magic-hover magic-hover__square" href="#">Pages</a>
                                            <ul>
                                                <li><Link className="magic-hover magic-hover__square" to="/about">About</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/pricing">Pricing Plans</Link></li>
                                                <li><Link className="magic-hover magic-hover__square" to="/error404">404</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link className="magic-hover magic-hover__square" to="/contact">Contact</Link></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="extras">
                                <a href="" id="desktop-menu" className="magic-hover magic-hover__square menu-btn">
                                    <i className="fa-solid fa-bars"></i>
                                </a>

                                <a href="pdf/orix.pdf" className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s" target="_blank"><i className="fa-solid fa-download"></i>Download CV</a>
                            </div>

                        </div>
                        <div className="menu-wrap">
                            <div className="menu-inner ps ps--active-x ps--active-y">
                                <span className="menu-cls-btn"><i className="cls-leftright"></i><i className="cls-rightleft"></i></span>
                                <div className="contact-info">
                                    <a className="magic-hover magic-hover__square" href="index.html">
                                        <img src="./assets/img/black-logo.png" alt="logo" />
                                    </a>
                                    <h5>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</h5>
                                    <ul className="recent-news gallery-photos">
                                        <li>
                                            <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/97x97" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/97x97"/></a>
                                        </li>
                                        <li>
                                            <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/97x97" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/97x97"/></a>
                                        </li>
                                        <li>
                                            <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/97x97" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/97x97"/></a>
                                        </li>
                                        <li>
                                            <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/97x97" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/97x97"/></a>
                                        </li>
                                        <li>
                                            <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/97x97" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/97x97"/></a>
                                        </li>
                                        <li>
                                            <a className="magic-hover magic-hover__square" href="https://via.placeholder.com/97x97" data-fancybox="gallery"><img alt="girl" src="https://via.placeholder.com/97x97"/></a>
                                        </li>
                                    </ul>

                                    <div className="e-mail">
                                        <div className="icon-box"><i className="fa-solid fa-envelope"></i></div>
                                        <div><h6>Phone No</h6>
                                            <a className="magic-hover magic-hover__square" href="mailto:username@domain.com">username@domain.com</a>
                                        </div>
                                    </div>
                                    <div className="e-mail">
                                        <div className="icon-box"><i className="fa-solid fa-phone"></i></div>
                                        <div><h6>Email Address</h6>
                                            <a className="magic-hover magic-hover__square" href="callto:+(123)4567890">+(123) 456 7890</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile-nav" id="mobile-nav" style={{display: "block"}}>
                    <div className="mobile-nav-img-data">
                        <a className="magic-hover magic-hover__square" href="index.html">
                            <img alt="logo" src="./assets/img/black-logo.png" />
                            
                        </a>
                    </div>


                    <ul>

                        <li className="menu-item-has-children">

                            <a className="magic-hover magic-hover__square" href=""><i className="icon-home"></i> Home</a>

                            <ul className="sub-menu">

                                <li><a className="magic-hover magic-hover__square" href="index.html">Home 1</a></li>

                                <li><a className="magic-hover magic-hover__square" href="index-2.html">Home 2</a></li>

                                <li><a className="magic-hover magic-hover__square" href="index-3.html">Home 3</a></li>

                                <li><a className="magic-hover magic-hover__square" href="index-4.html">Home 4 ( Light )</a></li>
                                <li><a className="magic-hover magic-hover__square" href="index-4-dark.html">Home 4 ( Dark )</a></li>

                            </ul>

                        </li>

                        <li><a className="magic-hover magic-hover__square" href="about.html"><i className="icon-user"></i> About</a></li>

                        <li className="menu-item-has-children"><a className="magic-hover magic-hover__square" href=""><i className="icon-briefcase"></i> Portfolio</a>

                            <ul className="sub-menu">

                                <li><a className="magic-hover magic-hover__square" href="portfolio-details-1.html">Portfolio Details 1</a></li>

                                <li><a className="magic-hover magic-hover__square" href="portfolio-details-2.html">Portfolio Details 2</a></li>

                                <li><a className="magic-hover magic-hover__square" href="portfolio-details-3.html">Portfolio Details 3</a></li>

                            </ul>

                        </li>

                        <li className="menu-item-has-children"><a className="magic-hover magic-hover__square" href=""><i className="icon-layers"></i>Blog</a>

                            <ul className="sub-menu">

                                <li><a className="magic-hover magic-hover__square" href="our-blog.html">Our Blog</a></li>

                                <li><a className="magic-hover magic-hover__square" href="blog-details-1.html">Blog Details 1</a></li>

                                <li><a className="magic-hover magic-hover__square" href="blog-details-2.html">Blog Details 2</a></li>

                            </ul>

                        </li>

                        <li className="menu-item-has-children"><a className="magic-hover magic-hover__square" href=""><i className="icon-folder"></i> Pages</a>

                            <ul className="sub-menu">

                                <li><a className="magic-hover magic-hover__square" href="services.html">Services</a></li>

                                <li><a className="magic-hover magic-hover__square" href="services-details.html">Services Details</a></li>

                                <li><a className="magic-hover magic-hover__square" href="pricing-plans.html">Pricing Plans</a></li>

                                <li><a className="magic-hover magic-hover__square" href="404.html">404</a></li>

                            </ul>

                        </li>

                        <li><Link className="magic-hover magic-hover__square" to="/contact"><i className="icon-envelope-open"></i> Contact</Link></li>

                    </ul>

                    <a className="magic-hover magic-hover__square" href="" id="res-cross"></a>

                    <a href="./pdf/orix.pdf" className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s" target="_blank"><i className="fa-solid fa-download"></i>Download CV</a>

                </div>
            </header>


        </>
    )
}

export default Navbar