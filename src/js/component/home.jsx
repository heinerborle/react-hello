import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col">
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-3 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-3 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-3 col-sm-12">
						<Card />
					</div>
				</div>
				<div className="row">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;
