import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/about.css';

export default props => (
  <div className="main-container">
    <div className="header-container">
      <h1> ABOUT US</h1>
    </div>
    <div className="about-content-container ">
      <div className="about-author-container">
        <div className="about-name">
          Matt Staniszewski
        </div>
        <div className="about-image">
          <img src="https://files.slack.com/files-pri/T1EHQUJ8J-FH7V0MJ0Z/me.png" alt="" />
        </div>
        <div className="about-url">
          <a class="btn about-linkedin" href="https://www.linkedin.com/in/matt-staniszewski-57157820/" target="_blank" >LinkedIn</a>
        </div>
      </div>
      <br />
      <div className="about-author-container">
        <div className="about-name">
          Bill Darnall Jr.
        </div>
        <div className="about-image">
          <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div className="about-url">
          <a class="btn about-linkedin" href="https://www.linkedin.com/in/billdarnalljr/" target="_blank" >LinkedIn</a>
        </div>
      </div>
      <br />
      <div className="about-author-container">
        <div className="about-name">
          Christopher Sulayao
        </div>
        <div className="about-image">
          <img src="https://media.licdn.com/dms/image/C5603AQGKxBPNnowI2Q/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=3zVF2jwfKeSsqO1L2lULGY4HYlD5ktuYOiNLlAX1VVo" alt="" />
        </div>
        <div className="about-url">
          <a class="btn about-linkedin" href="https://www.linkedin.com/in/christopher-s-07a09b171/" target="_blank" >LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
)
