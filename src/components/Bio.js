import React from 'react';

const Bio = () => {
  return (
    <section id="about" className="bio">
      <div className="container">
        <h2>About Me</h2>
        <div className="bio-content">
          <div className="bio-text">
            <p>
              I'm a Computer Engineering student at Virginia Tech with a passion for bridging the gap 
              between hardware and software through innovative design solutions. My experience spans 
              from PCB design and embedded systems to full-stack web development, allowing me to 
              tackle complex technical challenges from multiple angles.
            </p>
            <p>
              Currently, I lead the controls team for VT BOLT, where I design battery management 
              systems and testing equipment for our electric motorcycle that competes in national 
              competitions. I also contributed to UAV simulation research with Virginia Tech's 
              National Security Institute, developing AI-enhanced drone environments using MATLAB 
              and Python.
            </p>
            <p>
              My hands-on approach to learning has taken me from high school robotics competitions 
              to university research teams, where I've developed expertise in schematic design, 
              3D printing, and programming in multiple languages. I thrive in collaborative 
              environments where I can combine technical innovation with practical problem-solving 
              to create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;