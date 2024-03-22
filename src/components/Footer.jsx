import React from 'react'

//css
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

// end
// import '../assets/img/footer.png'
// import footerLogo from '../assets/img/orix-logo.png'
const Footer = () => {
    return (
        <>
            <footer className="gap" style={{backgroundImage:'url(../assets/img/footer.png)'}}>
                <div className="container">
                    <div className="footer-data">
                        {/* <img alt="log" src={footerLogo} /> */}
                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris Morbi accumsan ipsuy
                            a odio tincdunt ilmauctor className aptent taciti sociosqu ads Etiam.</p>
                        <ul className="social-media-footer">
                            <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-facebook-f fb"></i>Facebook</a></li>
                            <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-twitter tw"></i>Twitter</a></li>
                            <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-vimeo-v vi"></i>Vimeo</a></li>
                            <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-linkedin-in in"></i>Linked In</a></li>
                        </ul>
                        <h6>© 2022 CV Resume<i className="fa-solid fa-heart"></i>By Winsfolio, All Rights Reserved</h6>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer