import logo from "../images/Group 951.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Login = () => {
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
						<h4>LOGIN</h4>
						<input type='text' name='email' placeholder='email' autoFocus />
						<input
							type='text'
							name='password'
							id='password'
							placeholder='Create password'
						/>
						<input type='text' name='confirm-password' id='confirm-password' />
						<p>
							<Link to='/recoverPassword'>Forgot Password?</Link>
						</p>
						<button className='pry-button'>
							LOGIN <FaArrowRight style={{ marginLeft: "0.2rem" }} />{" "}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
