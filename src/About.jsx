import React from "react";
import "./About.css";
const About = () => {
	return (
		<div className="about_container">
			<img src="/src/images/1.png" alt="trophy" className="trophy" />
			<div className="about_info">
				<h5>
					C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
					4th time.
				</h5>
				<ul>
					<li>
						C.R.I.'s energy efficient products are well recognized by various
						Government Institutions, as trustworthy products for various
						projects across the globe to save energy.
					</li>
					<li>
						C.R.I. is the highest contributor in the country for the projects of
						EESL (Energy Efficiency Services Limited) to replace the old
						inefficient pumps with 5 Star rated energy efficient smart pumps
						with IoT enabled control panel.
					</li>
				</ul>
				<img
					src="/src/images/2.png"
					alt="reveiving trophy"
					className="trophy2"
				/>
				<p>
					Government of India has awarded the{" "}
					<b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
					Joint Managing Director of C.R.I. Group received the award from Smt.
					Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
					Honorable Minister of State.
				</p>
			</div>
		</div>
	);
};

export default About;