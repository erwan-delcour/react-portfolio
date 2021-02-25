import React from "react"
import '../css/styles-projets.css'

//import stock
import stock from "../img/LiveQuestionScreen.png"
import stock1 from "../img/projet2.jpg"
import stock2 from "../img/projet3.png"
import stock3 from "../img/SitePersoScreen.PNG"
import stock4 from "../img/LiveQuestionDetails.PNG"
import stock5 from "../img/SitePersoDetails.PNG"
import stock6 from "../img/ProScreenHome.PNG"
import stock7 from "../img/ProScreen.PNG"
import stock8 from "../img/ProDetails.PNG"

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projets</h3>
                <p className="subtitle-a">
                  Vous pouvez retrouver ici certains de mes projets.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">LiveQuestion</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            PHP7 HTML5 CSS3 Bootstrap
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Site personnel</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJs CSS3 Bootstrap JQuery 
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock7} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Site pour un professionnel</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JavaScript JQuery CSS3 PHP7
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a target="_blank" href="http://sophrologie-ceciledelcour.com/"><u style={{marginLeft:"10px"}}>Lien vers le site</u></a>
                <a
                  href={stock8}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
