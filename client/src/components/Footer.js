import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
	return (
		<footer>
			<div className='more-info'>
				<div className='more-info-left'>
					<div>
						<h6>GET UPDATE ON NEW CONTESTS</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Temporibus fugiat animi corporis aspernatur. Vel debitis delectus
							quaerat, magnam porro eum dicta necessitatibus officia eaque
							aliquid,
						</p>
						<button>
							JOIN MAIL LIST <FaArrowRight style={{ marginLeft: "0.2rem" }} />
						</button>
					</div>
				</div>
				<div className='more-info-right'>
					<div>
						<h6>STAY UP-TO-DATE WITH SOCIAL MEDIA</h6>
						<div className='social-div'>
							<div>
								<FaLinkedinIn className='social-icon' />
								<p>LINKEDIN</p>
							</div>
							<div>
								<FaTwitter className='social-icon' />
								<p>TWITTER</p>
							</div>
							<div>
								<FaYoutube className='social-icon' />
								<p>YOUTUBE</p>
							</div>
							<div>
								<FaDiscord className='social-icon' />
								<p>DISCORD</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='idea-label'>
				<p>IDEA MARK</p>
			</div>
			<div className='footer'>
				<div className='footer-left'>
					<button className='footer-btnA'>
						<Link to='/allContest'>JOIN CONTEST</Link>
					</button>
					<button className='footer-btnB'>
						<Link to='/createContest' style={{ color: "black" }}>
							CREATE CONTEST
						</Link>
					</button>
				</div>
				<div className='footer-right'> ALL RIGHT RESERVED (2021)</div>
			</div>
			<div className='end-div'></div>
		</footer>
	);
};
export default Footer;
