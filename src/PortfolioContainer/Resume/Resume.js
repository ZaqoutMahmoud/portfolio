import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "HTML & CSS", ratingPercentage: 95 },
    { skill: "Redux", ratingPercentage: 65 },
    { skill: "Python", ratingPercentage: 65 },
    { skill: "C#", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "React JS Drum Machine",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Online Drum Machine created to play music in any device at any time",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "React JS Calculator",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A online Calculator with an unbrakeable code prepared for all kind of user inputs",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Intec Brussel, Brussel, Belgium "}
        subHeading={"Full Stack Developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"PCVO Moderne Talen Hasselt , Hasselt, Belgium"}
        subHeading={"Dutch as a second language (NT2) - Level : 4/2"}
        fromDate={"2019"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"University of Palestine , Gaza , Palestine"}
        subHeading={"Bachelor's degree, Management Information Systems"}
        fromDate={"2011"}
        toDate={"2014"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"The New Arab "}
          subHeading={"Social Media Assistant"}
          fromDate={"2014"}
          toDate={"2017"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            {
              "Analyze campaigns and translate anecdotal or qualitative data into recommendations and plans for revising the Social Media campaigns. \n Monitor effective benchmarks (best practices) for measuring the impact of Social Media campaigns. Analyze, review, and report on effectiveness of campaigns in an effort to maximize results."
            }
          </span>
        </div>
        <br></br>
        <ResumeHeading
          heading={"Palestinian Football Association"}
          subHeading={"An administrative assistant"}
          fromDate={"2010"}
          toDate={"2011"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            {
              "Working with a team to keep order and a good enviroment in job, Constantly problem solving of different kinds"
            }
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Football"
        subHeading="I like playing Football, I was a Football player in my childhood, and I dreamed of becoming a professional soccer player, but I stopped playing at an early age to focus on my studies"
      />
      <ResumeHeading
        heading="Journalism"
        subHeading="I was an experienced Reporter with a demonstrated history of working in the newspapers industry. Skilled in sport sector and social media."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
