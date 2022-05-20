import React from 'react'



const Services = () => (
  <section id="service" className="services-mf route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="title-box text-center">
          <h3 className="title-a">
            Services
          </h3>
          <p className="subtitle-a">
            These are the main areas I've been working the last three years
          </p>
          <div className="line-mf" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="ion-monitor" /></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Web Design</h2>
            <p className="s-description text-center">
              Working with content managment tools as WordPress, I've reach a clean and modern design eye for Frontend Web Design.
              At the same time searching for Resposive integrations for a better user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="ion-code-working" /></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Web Development</h2>
            <p className="s-description text-center">
              Because of my dedication I've been able to work on diferents Profesional Enviroments as a Web Developer,
              from Development to Production, taking care for testing, versioning and corrections in production enviroments.
            </p>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>

)

export default Services;