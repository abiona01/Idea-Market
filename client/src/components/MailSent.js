import logo from "../images/Group 951.png";
import mail from "../images/image 20.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const MailSent = () => {
	return (
		<section className='main'>
			<div className='left'>
				<div>
					<img src={logo} alt='logo' />
					<h1>IDEA MARKET PLACE</h1>
					<p>Get rewarded for your idea</p>

					<button className='pry-button'>
						<Link to='/register'>REGISTER HERE</Link>
					</button>
				</div>
			</div>
			<div className='right'>
				<div>
					<div>
						<img src={mail} alt='mail' />
						<h4>MAIL SENT</h4>

						<p>Recovery information has been sent to your mail</p>
						<button>
							<Link to='/login'>
								{" "}
								BACK TO LOGIN <FaArrowRight
									style={{ marginLeft: "0.2rem" }}
								/>{" "}
							</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
