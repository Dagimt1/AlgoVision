import React from "react";
import "./aboutus.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="aboutUsContainer">
      <header className="aboutUsheader">
        <h1 className="aboutUstitle" onClick={navigateHome}>
          Algorithm Visualizer
        </h1>
      </header>
      <h1 className="aboutUsh1">About Us</h1>
      <div className="aboutUsPcontainer">
        <p className="aboutUsP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          beatae non provident inventore maxime totam excepturi reprehenderit!
          Illum quaerat laboriosam a nulla vitae, debitis tempora odio
          consectetur, aspernatur repellendus quibusdam. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Error voluptates quo architecto
          mollitia facilis in aperiam, dignissimos illum et nobis delectus!
          Delectus odit quos quis ipsam velit vitae sequi quo?
        </p>
        <div className="aboutUsGif">
          <img className="imgAboutUsGif" src="./gif/DBzChar.gif" alt="DBZ" />
        </div>
      </div>
      <hr />
      <div>
        <h2 className="aboutUsH2">Team</h2>
        <div className="aboutUsTeam">
          <div className="aboutUsTeamMember1">
            <img className="aboutUsTeamMember1GIF" src="./gif/goku.gif" alt="Goku" />
            <h3>Dagim J</h3>
            <p>Fullstack Developer</p>
          </div>
          <div className="aboutUsTeamMember2">
            <img className="aboutUsTeamMember1GIF" src="./gif/vegeta.gif" alt="Vegeta" />
            <h3>Yukun Z</h3>
            <p>Fullstack Developer</p>
          </div>
          <div className="aboutUsTeamMember3">
            <img className="aboutUsTeamMember1GIF" src="./gif/broly.gif" alt="Goku" />
            <h3>Christopher D</h3>
            <p>Fullstack Developer</p>
          </div>
          <div className="aboutUsTeamMember4">
            <img className="aboutUsTeamMember1GIF" src="./gif/trunks.gif" alt="Trunks" />
            <h3>David C</h3>
            <p>Fullstack Developer</p>
          </div>
          <div className="aboutUsTeamMember5">
            <img className="aboutUsTeamMember1GIF" src="./gif/bulma.gif" alt="Bulma" />
            <h3>Ashleigh M</h3>
            <p>Fullstack Developer</p>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
