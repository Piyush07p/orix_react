import React from 'react'

const About = () => {
  return (
    <>
      <section id="particles-js" className="blog-detail pattern gap" style={{backgroundImage:"url(https://via.placeholder.com/1920x530)"}}>
        <div className="container">
          <div className="blog-detail-data gap no-bottom">
            <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">About Us</h2>
            <ul data-aos="fade-up" data-aos-delay="300" data-aos-duration="400">
              <li><a className="magic-hover magic-hover__square" href="index.html"><i className="fa-solid fa-house"></i>home</a></li>
              <li><a className="magic-hover magic-hover__square" href="#"><span>/</span>    About</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="about gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
              <div className="about-mee">
                <h2>About Me</h2>
                <p>I like creating a cool design project.</p>

                <ul className="social-media-icon"><li><a href="pdf/orix.pdf" className="button button--moema button--text-thick button--text-upper button--size-s" target="_blank"><i className="fa-solid fa-download"></i>Download CV</a></li>
                  <li><a className="f magic-hover magic-hover__square" href="javascript:void(0)"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a className="in magic-hover magic-hover__square" href="javascript:void(0)"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a className="t magic-hover magic-hover__square" href="javascript:void(0)"><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
                <ul className="age">
                  <li><h6>Age:<span>29</span></h6></li>
                  <li><h6>Residence:<span>USA</span></h6></li>
                  <li><h6>Address:<span>88 Some Street, Some Town</span></h6></li>
                  <li><h6>E-mail:<span>email@example.com</span></h6></li>
                  <li><h6>Phone:<span>+0123 123 456 789</span></h6></li>
                  <li><h6>Freelance:<span>Available</span></h6></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="400">
              <div className="progress-data">
                <p>Vestibulum vitae lorim tellus nec dui dictum lorim viverra
                  ac, place uilm rat Lorse ipsom uilme umes acdictm Vesti
                  itae lorim tellus nec dui dictum lorim viverra a eros ac, pl
                  rat Lorse ipsom lorimes aul erdum. erdum.  Vestibulum vi
                  rat Lorse ipsom lorimes aul erdum. erdum. </p>
                <img alt="sine" src="./assets/img/sine.png"/>
                  <div className="progress-bara-data">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="home-one-progress">
                          <div className="count-time">
                            <h2 className="timer count-title count-number" data-to="50" data-speed="2000">50</h2><span>%</span>
                          </div>
                          <h5>Graphic Design</h5>
                          <div className="meter cadetblue">
                            <span data-progress="50" style={{width:"0"}}></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="home-one-progress">
                          <div className="count-time">
                            <h2 className="timer count-title count-number" data-to="75" data-speed="2000">75</h2><span>%</span>
                          </div>
                          <h5>Development</h5>
                          <div className="meter cadetblue">
                            <span data-progress="75" style={{width:0}}></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="home-one-progress">
                          <div className="count-time">
                            <h2 className="timer count-title count-number" data-to="38" data-speed="2000">38</h2><span>%</span>
                          </div>
                          <h5>Marketing Ideas</h5>
                          <div className="meter cadetblue">
                            <span data-progress="38" style={{width:0}}></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="home-one-progress">
                          <div className="count-time">
                            <h2 className="timer count-title count-number" data-to="63" data-speed="2000">63</h2><span>%</span>
                          </div>
                          <h5>Web Management</h5>
                          <div className="meter cadetblue">
                            <span data-progress="63" style={{width:0}}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="my-resume gap">
        <div className="container">
          <div className="hading" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
            <img alt="dots" src="./assets/img/dots.png"/>
              <p>Professional Experience</p>
              <h2>My Resume</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
              <div className="resume-data">
                <div className="headings resume">
                  <h3>Education</h3>
                </div>
                <div className="education">
                  <h5>2012 to 2014</h5>
                  <p>Bachelor Degree</p>
                  <div className="studies">
                    <h6>University of Studies</h6>
                    <p>Lorem ipsum indolor st amet, cmetc
                      ur adips locing elit, sedi dinm indolo
                      sum indolor st ailmes.</p>
                  </div>
                </div>
                <div className="education">
                  <h5>2010 to 2012</h5>
                  <p>Master Degree</p>
                  <div className="studies">
                    <h6>University of South Education</h6>
                    <p>Lorem ipsum indolor st amet, cmetc
                      ur adips locing elit, sedi dinm indolo
                      sum indolor st ailmes.</p>
                  </div>
                </div>
                <div className="education end">
                  <h5>2008 to 2010</h5>
                  <p>Advanced Post Graduate</p>
                  <div className="studies">
                    <h6>University of South Education</h6>
                    <p>Lorem ipsum indolor st amet, cmetc
                      ur adips locing elit, sedi dinm indolo
                      sum indolor st ailmes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
              <div className="resume-data">
                <div className="headings resume">
                  <h3>Experience</h3>
                </div>
                <div className="education">
                  <h5>2018 to Present</h5>
                  <p>Graphic Designer / Web Designer</p>
                  <div className="studies">
                    <h6>Envato Studio</h6>
                    <p>Lorem ipsum indolor st amet, cmetc
                      ur adips locing elit, sedi dinm indolo
                      sum indolor st ailmes.</p>
                  </div>
                </div>
                <div className="education">
                  <h5>2016 to 2018</h5>
                  <p>Junior Ui/Ux Designer</p>
                  <div className="studies">
                    <h6>Envato Studio</h6>
                    <p>Lorem ipsum indolor st amet, cmetc
                      ur adips locing elit, sedi dinm indolo
                      sum indolor st ailmes.</p>
                  </div>
                </div>
                <div className="education end">
                  <h5>20014 to 2016</h5>
                  <p>Senior Ui/Ux Designer</p>
                  <div className="studies">
                    <h6>Envato Studio</h6>
                    <p>Lorem ipsum indolor st amet, cmetc
                      ur adips locing elit, sedi dinm indolo
                      sum indolor st ailmes.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clients-data">
        <div className="container">
          <div className="row client-logo owl-carousel owl-theme" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
            <div className="col-lg-3 item">
              <div className="clients-color">
                <img alt="clients" src="https://via.placeholder.com/278x128"/>
              </div>
            </div>
            <div className="col-lg-3 item">
              <div className="clients-color">
                <img alt="clients" src="https://via.placeholder.com/278x128"/>
              </div>
            </div>
            <div className="col-lg-3 item">
              <div className="clients-color">
                <img alt="clients" src="https://via.placeholder.com/278x128"/>
              </div>
            </div>
            <div className="col-lg-3 item">
              <div className="clients-color">
                <img alt="clients" src="https://via.placeholder.com/278x128"/>
              </div>
            </div>
            <div className="col-lg-3 item">
              <div className="clients-color">
                <img alt="clients" src="https://via.placeholder.com/278x128"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About