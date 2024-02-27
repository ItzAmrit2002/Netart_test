import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
const Footer = () => {
	return (
		<div className="footer_container">
			<div className="footer_content">
				<FaPhoneAlt
					color="red"
					size={"1.1rem"}
					style={{
						backgroundColor: "white",
						borderRadius: "50%",
						padding: "4px",
						marginRight: "3px",
					}}
				/>
				<p className="footer_text">
					Toll Free <b>1800 200 1234</b>
				</p>
			</div>

			<div className="footer_content">
				<FaFacebook
					color="white"
					size={"1.5rem"}
					style={{ paddingRight: "3px" }}
				/>
				<p className="footer_text">www.facebook.com/cripumps</p>
			</div>
			<div className="footer_content">
				<BsGlobe2
					color="white"
					size={"1.5rem"}
					style={{ paddingRight: "3px" }}
				/>
				<p className="footer_text">www.crigroups.com</p>
			</div>
		</div>
	);
};

export default Footer;
