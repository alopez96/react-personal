import React, { Component } from "react";
import '../style/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <h2 className="text-center">Home Page</h2>
          <p className="home-text">
            I am currently an undergrad student at UC Santa Cruz, where I will be getting my Computer Science degree.
            I have passion for web development and front end design, and
            I enjoy taking on new projects and learning new technologies.
            You can find me on LinkedIn, or check out my source code on GitHub and Bitbucket.
            My passion for Programming began when I was first introduced to the field of Engineering
            in High School, and it was because I was interested in the idea of designing,building,
            and being a creator. I went on to explore different Engineering fields at Community College,
            and I decided on Computer Science as my path to Software Engineering.
            Being a person who always questioned how things work,
            I was curious to understand how the technology I interacted with,
            did the things that it did. My interest in technology drove my
            desire to understand how it operates and how I can change it to design things of my own.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
