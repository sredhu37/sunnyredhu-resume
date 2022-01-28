import React from 'react';
// import { XYPlot, XAxis, YAxis, VerticalBarSeries  } from 'react-vis';
import myPic from '../static/my-photo.jpg';

const About = () => {
  // const data = [
  //   {x: 0, y: 8},
  //   {x: 1, y: 5},
  //   {x: 2, y: 4},
  //   {x: 3, y: 9},
  //   {x: 4, y: 1},
  //   {x: 5, y: 7},
  //   {x: 6, y: 6},
  //   {x: 7, y: 3},
  //   {x: 8, y: 2},
  //   {x: 9, y: 0}
  // ];

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
          Then I got curious about the deployment of those applications and hence got introduced to CI/CD. 
          After creating Jenkins CI/CD pipelines for about 1 year, I felt the need to understand how Jenkins as a Service works in Kubernetes.
        </p>
        <p>
          Now I think it's time for me to go deeper and understand the underlying infrastructure of how kubernetes is setup in public clouds. Therefore, I am currently gaining knowledge about the same.
        </p>
        <p>
          Apart from work, I love to play Cricket with my 3 year old son and hum classic Bollywood songs while working.
        </p>
      </div>
      {/* <XYPlot width={300} height={300}>
        <VerticalBarSeries
          data={ data }
          color="white" />
        <XAxis />
        <YAxis />
      </XYPlot> */}
    </div>
  );
}

export default About;