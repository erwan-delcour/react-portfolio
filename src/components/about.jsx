import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { 
          id: "HTML5_skill",
          content: "HTML5",
          porcentage: "80%",
          value: "80"
        },
        { 
          id: "CSS3_skill",
          content: "CSS3",
          porcentage: "75%",
          value: "75" 
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "65%",
          value: "65"
        },
        { 
          id: "PHP_skill",
          content: "PHP",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "C#_skill",
          content: "C#",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "Symfony_skill",
          content: "Symfony",
          porcentage: "40%",
          value: "40"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Je me suis intéressé à d'autres technologies, cependant à un niveau moins avancé. Comme par exemple Python qui est une technologie que j'ai quelques fois utilisé ou encore Sass."
        },
        {
          id: "second-p-about",
          content:
            "Je suis également habitué à utiliser différents outils pratiques comme Git, GitHub."
        },
        {
          id: "third-p-about",
          content:
            "Au cours de mes projets, j'ai eu la chance de pouvoir utilisé différents Framework que je maitrise aujourd'hui, notamment Bootstrap et Jquery. J'ai pu aussi me familiariser avec le CMS Wordpress."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Mes connaissances</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">A propos de moi</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
