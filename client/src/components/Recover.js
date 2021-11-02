import logo from "../images/Group 951.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Recover = () => {
	return (
		<section className='main'>
			<div className='left'>
				<div>
					<img src={logo} alt='logo' />
					<h1>IDEA MARKET PLACE</h1>
					<p>Get rewarded for your idea</p>

					<button className='pry-button'>REGISTER HERE</button>
				</div>
			</div>
			<div className='right'>
				<div>
					<div>
						<h4>RECOVER PASSWORD</h4>
						<input type='text' name='email' placeholder='email' autoFocus />

						<p>
							<Link to='/login'>Log in Here</Link>
						</p>
						<button>
							<Link to='/mailSent'>
								RECOVER PASSWORD
								<FaArrowRight style={{ marginLeft: "0.2rem" }} />{" "}
							</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
