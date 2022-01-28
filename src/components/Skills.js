import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className='Skills'>
      <a id="skills" />
      <div>
        <h2>SKILLS EXPERTISE</h2>
        <hr />
      </div>
      <br />
      <h4>TOOLS</h4>
      <div>
        <ul>
          <li className='skill'> Kubernetes application deployment <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> GitOps (Flux) <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Helm <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Docker <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> CI/CD (Jenkins) <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Operating Private Cloud <ProgressBar variant="warning" now={60} /></li>
          <li className='skill'> Python and Bash scripting <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Packer and Ansible <ProgressBar variant="warning" now={60} /></li>
        </ul>
      </div>
      <h4>COURSE CERTIFICATIONS</h4>
      <div>
        <ul>
          <li className='skill'> Go Essential Training - LinkedIn <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Learning Go - LinkedIn <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Google Cloud Platform Essential Training for Administrators - LinkedIn <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Learning Hashicorp Packer - LinkedIn <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Kubernetes: Monitoring with Prometheus - LinkedIn <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Kubernetes: Package management with Helm - LinkedIn <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Learning Terraform - LinkedIn <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> AWS fundamentals for System Administrators - Pluralsight <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> RESTful Web Services with Node.js and Express - Pluralsight <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> DevOps Foundations - Lynda.com <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Learning Ansible - Lynda.com <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Docker and Containers: The Big Picture - Pluralsight <ProgressBar variant="success" now={100} /></li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Skills;