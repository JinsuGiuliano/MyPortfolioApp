import React from 'react'



const Porfolio = () => (

    <section id="work" className="portfolio-mf sect-pt4 route">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">
              Portfolio
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
          <div className="work-box">
            <a href="https://bespoke-narwhal-d70ee7.netlify.app" target="_blank" rel="noreferrer">
              <div className="work-img">
                <img src="img/gg-shop.png" alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Ecommerce GG-Shop</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> / <span className="w-date">18 Dic. 2021</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href="img/work-2.jpg" data-lightbox="gallery-mf">
              <div className="work-img">
                <img src="img/work-2.jpg" alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Loreda Cuno Nere</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href="img/work-3.jpg" data-lightbox="gallery-mf">
              <div className="work-img">
                <img src="img/work-3.jpg" alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Mavrito Lana Dere</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Porfolio;