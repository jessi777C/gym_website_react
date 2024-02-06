import React from "react";
import aboutimage from "../images/about.png";
function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          suscipit doloribus sed. Aspernatur, alias libero, harum, voluptates
          repellat minima dolorum perspiciatis ad delectus pariatur architecto
          expedita sapiente laborum tempore iusto?
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
