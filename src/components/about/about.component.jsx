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
                    <p><span className="title-s">Profile: </span> <span> Software Developer </span></p>
                    <p><span className="title-s">Email: </span> <span>jinsu.gustavo.giuliano@gmail.com</span></p>
                    <p><span className="title-s">Phone: </span> <br/><span>(+31) 063 865 7704 (Netherlands) <br/> (+595) 984 452 539 (Paraguay)</span></p>
                  </div>
                </div>
              </div>
              <div className="skill-mf">
                <p className="title-s">Skill</p>
                <span>Golang </span> <span className="pull-right">80%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span>PostgreSQL</span> <span className="pull-right">80%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span>Svelte.js</span> <span className="pull-right">85%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <span>Github</span> <span className="pull-right">85%</span>
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
                    <span className='font-weight-bold'>Passionate Full-Stack Developer</span><br/>
                    I am a passionate full-stack developer with a penchant for problem-solving and a commitment to delivering robust solutions.
                    Currently, I am immersed in the dynamic world of fintech at Quantex, where I play a pivotal role in crafting innovative solutions for our trading platform specializing in government bonds.
                </p>
                  <p className="lead ">
                  <span className='font-weight-bold'>Technological Versatility </span><br/>
                    In my role, I thrive on the versatility of technologies, leveraging Golang and PostgreSQL for our backend infrastructure and harnessing the power of Svelte.js for our sleek and responsive frontend.
                    This diversity allows me to tackle a spectrum of challenges, from architecting intricate data structures for trading algorithms to implementing secure user authentication mechanisms.
                </p>
                  <p className="lead">
                   
                  <span className='font-weight-bold'>Startup Ethos: Integrating Business Understanding with Technical Mastery</span><br/>
                    What sets Quantex apart is its startup ethos, fostering an environment where understanding the business domain is as crucial as mastering the development stack.
                    Here, I've had the privilege of spearheading projects ranging from real-time trader chats to in-depth trade analysis tools, all while honing my skills in development, review, and deployment practices on a daily basis.
              </p>
                  <p className="lead">
                    <span className='font-weight-bold'>Growth Through Collaboration: Mentorship and Development Practices</span><br/>
                    Collaborating with seasoned developers has been instrumental in my growth journey. Their mentorship has instilled in me a deep appreciation for robust development practices and a holistic understanding of the software development lifecycle. This exposure has also fueled my innate curiosity, prompting me to explore new horizons.
                    As evidence of this, I have embarked on mastering the Ruby programming language and the Ruby on Rails framework, further expanding my toolkit to tackle diverse challenges.
                  </p>
                  <p className="lead">
                    <span className='font-weight-bold'>Driven by Creativity: Beyond Language and Tools</span><br/>
                  In essence, I am not merely bound to specific languages or tools; rather, I am driven by an insatiable curiosity and a relentless pursuit of creative solutions.
                  My journey as a developer is characterized by a commitment to excellence, a thirst for knowledge, and an unwavering passion for crafting software that makes a tangible difference.
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