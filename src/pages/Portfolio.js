import React from 'react';
import Container from "../components/Container";
import Project from '../components/Portfolio';

function Portfolio() {
	return (
	  <Container>
		<section className="content">
			<div className="col-md-12 midsection">
			  <h2>Portfolio</h2>
				<Project
				  name="Work Day Scheduler"
				  imgPath={require("../assets/images/Work Day Scheduler HW2.png")}
				  linkDeployed="https://jenjch.github.io/passwordGenerator/"
				  linkGithub="https://github.com/jenjch/passwordGenerator"
				/>

			</div>
		</section>
	  </Container>
	);
  }
  

export default Portfolio;