import React from 'react'



const About = () => (

    <section id="about" className="about-mf sect-pt4 route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="box-shadow-full">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-5">
                  <div className="about-img">
                    <img src="img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-7">
                  <div className="about-info">
                    <p><span className="title-s">Name: </span> <span>Gustavo Giuliano</span></p>
                    <p><span className="title-s">Profile: </span> <span>jr full stack developer</span></p>
                    <p><span className="title-s">Email: </span> <span>jinsu.gustavo.giuliano@gmail.com</span></p>
                    <p><span className="title-s">Phone: </span> <br/><span>(+31) 063 865 7704 (Netherlands) <br/> (+595) 984 452 539 (Paraguay)</span></p>
                  </div>
                </div>
              </div>
              <div className="skill-mf">
                <p className="title-s">Skill</p>
                <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span>HTML</span> <span className="pull-right">85%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span>CSS3</span> <span className="pull-right">75%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span>PHP</span> <span className="pull-right">50%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">
                    About me
                  </h5>
                </div>
                <p className="lead">
                I am a responsible, dynamic person, with aspirations, desire to excel and goals based on the achievement of objectives, 
                I learn quickly and I am interested in adequately complying with honesty and responsibility in the various activities that I carry out.
                </p>
                <p className="lead">
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                  porttitor volutpat. Vestibulum
                  ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                </p>
                <p className="lead">
                  Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                  Nulla porttitor accumsan
                  tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)

export default About;