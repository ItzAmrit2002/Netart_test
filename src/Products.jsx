import React from "react";
import "./Products.css";

const Products = () => {
	const text =
		"CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL";
	const parts = text.split("|").map((part, index) => {
		const isLast = index === text.split("|").length - 1;

		return (
			<React.Fragment key={index}>
				{part}
				{!isLast && (
					<b>
						<span style={{ color: "red" }}>|</span>
					</b>
				)}
			</React.Fragment>
		);
	});
	return (
		<div className="product_container">
			<div className="product_upper">
				<p className="product_headers">
					INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
					RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
					POWER FOR THE NATION.
				</p>
				<img src="/assets/3.png" alt="products" className="products" />
				<p className="product_headers">
					Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
					Solar Systems - Motors
				</p>
			</div>
			<div className="product_bottom">
				<h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
				<p className="product_headers">{parts}</p>
			</div>
		</div>
	);
};

export default Products;
