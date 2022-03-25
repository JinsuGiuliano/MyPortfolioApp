import React from 'react'


const Blog = () => (

    <div>
    <div className="testimonials paralax-mf bg-image" style={{backgroundImage: 'url(img/overlay-bg.jpg)'}}>
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-mf" className="owl-carousel owl-theme">
              <div className="testimonial-box">
                <div className="author-test">
                  <img src="img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a" />
                  <span className="author">Xavi Alonso</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <span className="comit"><i className="fa fa-quote-right" /></span>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="author-test">
                  <img src="img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a" />
                  <span className="author">Marta Socrate</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <span className="comit"><i className="fa fa-quote-right" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ Section Blog Star /*/}
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Blog
              </h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="/"><img src="img/post-1.jpg" alt="" className="img-fluid" /></a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Travel</h6>
                  </div>
                </div>
                <h3 className="card-title"><a href="/">See more ideas about Travel</a></h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                  a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="/">
                    <img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                    <span className="author">Morgan Freeman</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="ion-ios-clock-outline" /> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="/"><img src="img/post-2.jpg" alt="" className="img-fluid" /></a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Design</h6>
                  </div>
                </div>
                <h3 className="card-title"><a href="/">See more ideas about Travel</a></h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                  a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="/">
                    <img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                    <span className="author">Morgan Freeman</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="ion-ios-clock-outline" /> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="/"><img src="img/post-3.jpg" alt="" className="img-fluid" /></a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Design</h6>
                  </div>
                </div>
                <h3 className="card-title"><a href="/">See more ideas about Travel</a></h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                  a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="/">
                    <img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                    <span className="author">Morgan Freeman</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="ion-ios-clock-outline" /> 10 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Blog;