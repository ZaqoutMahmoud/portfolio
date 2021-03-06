import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I would like to introduce myself, my name is Mahmoud Zaqout and I am from Palestine. I came to Belgium 4 years ago.  In Palestine I obtained my Bachelor's degree in 'Management and information Systems'. In addition, my diploma in Belgium was equated with a Bachelor of Applied Informatics. In Palestine I worked as a sports journalist at Al-Arabiya, a news website.  I also worked as a 'Social Media Assistant' atThe New Arab or Al-Araby Al-Jadeed.  In addition, I also worked as an administrative assistant for the Palestinian Football Association. Because of these experiences I can tell you that I am administratively strong, I am also creative in building websites where I work with various programs. I can describe myself as a studious young man, conscientious, loyal and collegial. Beyond that I have a problem-solving ability as well as I attach importance to accuracy and punctuality.In recent years I have focused on learning the Dutch language. I'm a developer extremely motivated and passionate about learning new technologies that help me grow in te professional area. I define myself a solution seeker who enjoys learning something new every day",
    highlights: {
      bullets: [
        "Full Stack Web Development",
        "Interactive Front End as per the design",
        "React JS",
        "Redux for State Managment",
        "Building REST API",
      ],
      heading: "Here Are a Few Highlights",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {""}
                Hire me{" "}
              </button>
              <a href="CV.pdf" download="CV.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
