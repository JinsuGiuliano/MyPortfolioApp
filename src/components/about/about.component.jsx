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
                    <img src="img/profilephoto.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-7">
                  <div className="about-info">
                    <p><span className="title-s">Name: </span> <span>Gustavo Giuliano</span></p>
                    <p><span className="title-s">Profile: </span> <span> jr React Js Dev </span></p>
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
                <span>NODE JS</span> <span className="pull-right">85%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span>GITHUB</span> <span className="pull-right">75%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span>CLOUD TOOLS</span> <span className="pull-right">50%</span>
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
                 Since 2019 I've been a self tought web developer, while studying for my Computer Science Degree and working as a Web Developer until now, 
                 I've experience many programing languages from low to high level, including C#, JAVA, PHP and JAVASCRIPT. 
                </p>
                <p className="lead">
                  Last year while I was working as a C# Web Dev, I started to be courious about high level programing languages as JAVASCRIPT and libraries
                  as REACT and NODE JS. Since then I been focusing my Studying and work in this technologies.
                </p>
                <p className="lead">
                I'm a courious person so I allways want to look for new and better solutions searching for efficiency and scalability.
              </p>
              <p className="lead">
              I am a responsible, dynamic person, with aspirations, desire to excel and goals based on the achievement of objectives, 
              I learn quickly and I am interested in adequately complying with honesty and responsibility in the various activities that I carry out.
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