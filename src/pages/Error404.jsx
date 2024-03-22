import React from 'react'

const Error404 = () => {
  return (
    <>
      <section id="particles-js" className="blog-detail pattern error-page gap" >
        <div className="container">
          <div className="error" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
            <div className="error-img">
              <h2>4</h2>
              <img alt="404" src="./assets/img/404.png"/>
                <h2>4</h2>
            </div>
            <h3>Ooops, Page Not Found</h3>
            <p>We Can't Seem to find the page you're looking for.</p>
            <form className="one error-input">
              <input type="text" name="Kayword" placeholder="Enter Kayword...."/>
                <button className="magic-hover magic-hover__square"><i className="fa-solid fa-magnifying-glass"></i></button>

            </form>
          </div>
          {/* <div className="footer-data">
            <ul className="social-media-footer">
              <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-facebook-f fb"></i>Facebook</a></li>
              <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-twitter tw"></i>Twitter</a></li>
              <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-vimeo-v vi"></i>Vimeo</a></li>
              <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-linkedin-in in"></i>Linked In</a></li>
            </ul>
            <h6>© 2022 CV Resume<i className="fa-solid fa-heart"></i>By Winsfolio, All Rights Reserved</h6>
          </div> */}
        </div>

      </section>
    </>
  )
}

export default Error404