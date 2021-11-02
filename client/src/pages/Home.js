import logo from "../images/Group 951.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Category from "../components/Category";
import Contest from "../components/Contest";
import AllCategories from "../components/AllCategories";
import Footer from "../components/Footer";
export const Home = () => {
	return (
		<section className='home-page'>
			<div className='home'>
				<div className='home-left'>
					<div className='home-info'>
						<div className='home-btn'>
							<button>
								<Link to='/allContest' style={{ color: "black" }}>
									JOIN CONTEST
								</Link>
							</button>
							<button>
								<Link to='/createContest'>CREATE CONTEST</Link>
							</button>
						</div>
						<div>
							<img src={logo} alt='logo' />
							<h1>IDEA MARKET PLACE</h1>
							<p>Get rewarded for your idea</p>

							<button className='pry-button' id='home-create'>
								<Link to='/createContest'>
									CREATE CONTEST{" "}
									<FaArrowRight
										style={{ marginTop: "0.2rem" }}
										className='pry-button-icon'
									/>{" "}
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className='home-right'>
					<Category />
				</div>
			</div>
			<Contest />
			<AllCategories />
			<Footer />
		</section>
	);
};
