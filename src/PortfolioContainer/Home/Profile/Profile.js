import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100072473696829">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/mahmoud-zaqout-48053741/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/mahmoud.zaqout7/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCXwwBYEC9Auf1Apy3uszY6g">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/mahmoud_zaqout">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Mahmoud</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Mobile Applications Developer",
                    1000,
                    "ReactJS & ReactNative Developer",
                    1000,
                    "E-Commerce Website Developer",
                    1000,
                    "WordPress® Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                    "Video Editor",
                    1000,
                    "Journalist",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire me{" "}
            </button>
            <a href="cv.pdf" download="cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
