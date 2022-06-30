import React from "react";

const Porfolio = () => (
  <section id="work" className="portfolio-mf sect-pt4 route">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">Portfolio</h3>
            <p className="subtitle-a">
              Some of the projects I've been working on last year. Hope you like
              them!
            </p>
            <div className="line-mf" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="work-box">
            <a
              href="https://bespoke-narwhal-d70ee7.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-img">
                <img src="img/gg-shop.png" alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Ecommerce GG-Shop</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Technologies:</span>
                      <span>
                        React JS / React SAGAS / React REDUX / Firestore Cloud
                        DB / TypeScript / Stripe Payment
                      </span>
                      <br />
                      <span className="w-ctegory">Features:</span>
                      <span>
                        Add to Cart / Add to WishList/ Buy Products ( test Mode
                        Only) Edit Prices, Name, Category (ONly for Admin Users)
                        / Google Login
                      </span>
                      <br />
                      <span className="w-ctegory">Future Features:</span>
                      <span>
                        Search Bar / Share WishList / Buy with Cryptos ( Web 3
                        Feature with Metamask )
                      </span>
                      <br />
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">18 Dic. 2021</span>
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
        <div className="col-md-6">
          <div className="work-box">
            <a
              href="https://dynamic-lebkuchen-258972.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-img">
                <img src="img/ongsocial.png" alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Social Media App for NGOs</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Technologies:</span>
                      <span>
                        React JS / React SAGAS / React REDUX / Firestore Cloud
                        DB{" "}
                      </span>
                      <br />
                      <span className="w-ctegory">Features:</span>
                      <span>
                        Social media like APP / Post Like & Save / Chat Between
                        Users / Google Login / File Share with app / Profile
                        Page / Follow Other Users / Search Newest Posts
                      </span>
                      <br />
                      <span className="w-ctegory">Future Features:</span>
                      <span>
                        comment posts / ONG Categories / Search Bar (Users,
                        posts, Topics...)
                      </span>
                      <br />
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">18 Dic. 2021</span>
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
);

export default Porfolio;
