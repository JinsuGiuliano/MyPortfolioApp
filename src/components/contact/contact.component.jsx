import React from "react";

const Contact = () => (
  <section
    className="paralax-mf footer-paralax bg-image sect-mt4 route"
    style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}
  >
    <div className="overlay-mf" />
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">Get in Touch</h5>
                  </div>
                  <div className="more-info">
                    <p className="lead">
                      Hi I hope you liked my porfolio. Feel free to contact me
                      for any help you would need.
                    </p>
                    <ul className="list-ico">
                      <li>
                        <span className="ion-ios-location" /> LOMAS VALENTINAS
                        1243, ASUNCIÓN, PARAGUAY{" "}
                      </li>
                      <li>
                        <span className="ion-ios-telephone" /> +595 984452539
                        (ONLY WHATSAPP)
                      </li>
                      <li>
                        <span className="ion-email" />{" "}
                        jinsu.gustavo.giuliano@gmail.com{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="socials">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/jinsu.giuliano/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-facebook" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/shiinsw/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-instagram" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/Shinsw3"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-twitter" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/JinsuGiuliano"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                Design by <strong>Gustavo Giuliano</strong>
              </p>
              <div className="credits"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
);

export default Contact;
