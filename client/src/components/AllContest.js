import { Link } from "react-router-dom";
import smallLogo from "../images/Small 951.png";
import { AllContestItem } from "./AllContestItem";
import Footer from "./Footer";
export const AllContest = () => {
	return (
		<section className='allcontest-section'>
			<div className='allcontest'>
				<div className='allcontest-heading'>
					<div className='allcontest-btn'>
						<div>
							<button>
								{" "}
								<Link to='/allContest' style={{ color: "black" }}>
									JOIN CONTEST
								</Link>
							</button>
							<button>
								<Link to='/createContest'>CREATE CONTEST</Link>
							</button>
						</div>
					</div>
					<div className='allcontest-logo'>
						<Link to='/'>
							<img src={smallLogo} alt='logo' />
						</Link>
					</div>
				</div>
				<AllContestItem />
				<AllContestItem />
				<AllContestItem />
				<button className='contest-more'>SHOW MORE</button>
			</div>
			<Footer />
		</section>
	);
};
