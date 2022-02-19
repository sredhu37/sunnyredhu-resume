import React from 'react';
import myPic from '../static/my-photo.jpg';

const About = () => {
  return(
    <div className="About">
      <a id="about" />
      <div className="aboutPhotoDiv">
        <img src={myPic} alt="Photo with my son" />
      </div>
      <hr />
      <div className="aboutContent">
        <p>
          After completing B.Tech. in Computer Science and Engineering from Manipal Institute of Technology,
          I started my career as a Software Engineer where I worked on developing and maintaining applications using Node.js, Express.js and React.js.
        </p>
        <p>
          Then, I got curious about how those applications are being deployed and consumed by the customers, and hence got introduced to CI/CD.
          After creating Jenkins CI/CD pipelines for about 1 year, I felt the need to understand how Jenkins as a Service works in Kubernetes.
        </p>
        <p>
          Currently, I deploy applications on Kubernetes clusters set up in public cloud.
        </p>
        <p>
          Apart from work, I love to play cricket with my 3 year old son and hum classic Bollywood songs while working.
        </p>
      </div>
    </div>
  );
}

export default About;