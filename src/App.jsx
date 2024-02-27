import React from "react";
import Header from "./Header";
import "./App.css";
import About from "./About";
import Products from "./Products";
import Footer from "./Footer";
const App = () => {
	return (
		<div className="container">
			<Header />
			<About />
			<Products />
			<Footer />
		</div>
	);
};

export default App;
