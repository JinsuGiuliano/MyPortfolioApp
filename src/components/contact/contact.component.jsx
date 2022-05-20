import React from 'react'



const Contact = () => (

    <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: 'url(img/overlay-bg.jpg)'}}>
    <div className="overlay-mf" />
    <div className="container">
    <div className="row">
        <div className="col-sm-12">
        <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
            <div className="row">
                <div className="col-md-6">
                <div className="title-box-2">
                    <h5 className="title-left">
                    Send Message Us
                    </h5>
                </div>
                <div>
                    <form className="contactForm">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage" />
                    <div className="row">
                        <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validation" />
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validation" />
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validation" />
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                            <div className="validation" />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <div className="col-md-6">
                <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">
                    Get in Touch
                    </h5>
                </div>
                <div className="more-info">
                    <p className="lead">
                    Hi I hope you liked my porfolio. Feel free to contact me for any help you would need.
                    </p>
                    <ul className="list-ico">
                    <li><span className="ion-ios-location" /> VIOOL 6, POSTAL CODE 6644DT, EWIJK, NETHERLANDS </li>
                    <li><span className="ion-ios-telephone" /> 06 38 657 704 </li>
                    <li><span className="ion-email" /> jinsu.gustavo.giuliano@gmail.com </li>
                    </ul>
                </div>
                <div className="socials">
                    <ul>
                    <li><a href="https://www.facebook.com/jinsu.giuliano/" target="_blank" rel="noreferrer"><span className="ico-circle"><i className="ion-social-facebook" /></span></a></li>
                    <li><a href="https://www.instagram.com/shiinsw/" target="_blank" rel="noreferrer"><span className="ico-circle"><i className="ion-social-instagram" /></span></a></li>
                    <li><a href="https://twitter.com/Shinsw3" target="_blank" rel="noreferrer"><span className="ico-circle"><i className="ion-social-twitter" /></span></a></li>
                    <li><a href="https://github.com/JinsuGiuliano" target="_blank" rel="noreferrer"><span className="ico-circle"><i className="ion-social-github" /></span></a></li>
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
            <p className="copyright">Design by <strong>Gustavo Giuliano</strong></p>
            <div className="credits">
            </div>
            </div>
        </div>
        </div>
    </div>
    </footer>
    </section>

)

export default Contact;