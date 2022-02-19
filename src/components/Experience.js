import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return(
    <div className='Experience'>
      <a id="experience" />
      <div className='experienceHeading'>
        <h2>EXPERIENCE</h2>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #EE4B28' }}
            date="Oct 2020 - Present"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> SCM CI Expert </h3>
            <h5 className="vertical-timeline-element-subtitle"> Nokia </h5>
            <br />
            <div className='experienceContent'>
              <b>Work</b>
              <ul>
                <li>Designed and implemented GitOps-based continuous delivery of applications on Kubernetes clusters ensuring their high availability</li>
                <li>Experience in setting up infrastructure as code on GCP using Terraform and Ansible</li>
                <li>Responsible for infrastructure monitoring and alerting with Prometheus and Grafana</li>
                <li>Experience with analysis of logs and performing root cause analysis for various issues coming up on daily basis</li>
              </ul>
              <b>Awards</b>
              <ul>
                <li><b><i>Nokia - Excellence Award</i></b> for taking initiative regarding GitOps in the team</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            date="June 2017 - Jan 2020 & May 2020 - Oct 2020"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> DevOps Engineer </h3>
            <h5 className="vertical-timeline-element-subtitle"> SAP </h5>
            <br />
            <div className='experienceContent'>
              <b>Work</b>
              <ul>
                <li>Implemented customizable CI/CD pipelines for a project, which enables commit-based deployment of services to cloud</li>
                <li>Created and maintained container images using Docker</li>
                <li>Wrote groovy scripts to setup Job DSL within Jenkins</li>
                <li>Implemented and enhanced scripts developed in Shell and Python to automate mundane tasks</li>
              </ul>
              <b>Awards</b>
              <ul>
                <li><b><i>SAP Appreciate Award</i></b> for exceptional performance in setting up CI/CD process for clients</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            date="Jan 2016 - June 2017"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Software Engineer </h3>
            <h5 className="vertical-timeline-element-subtitle"> Cerner Healthcare </h5>
            <br />
            <div className='experienceContent'>
              <ul>
                <li>Responsible for creating a POC using Node.js, Express.js and React.js which converted to a full-time project</li>
                <li>Responsible for handling Service Request and Customer Request tickets for maintaining the existing application</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education experienceContent"
            contentStyle={{ background: 'turquoise', color: '#fff' }}
            date="July 2012 - June 2016"
            iconStyle={{ background: 'turquoise', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> B.Tech. </h3>
            <h5 className="vertical-timeline-element-subtitle"> Manipal Institute of Technology </h5>
            <br />
            <div className='experienceContent'>
              <ul>
                <li>Member of college Badminton team</li>
                <li>Runners-up in inter-section cricket tournament</li>
                <li>Created a 3D game (Space Shooter) using Unity3D framework</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;