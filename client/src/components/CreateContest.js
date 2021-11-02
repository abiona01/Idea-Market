import { Link } from "react-router-dom";
import smallLogo from "../images/Small 951.png";
import { FaArrowRight } from "react-icons/fa";
export const CreateContest = () => {
	return (
		<div className='create-contest'>
			<div className='create-contest-left'>
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
				<div className='create-contest-left-body'>
					<h1>CREATE CONTEST</h1>
					<h6>TERMS &amp; CONDITION</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ab
						hic commodi iusto? Nesciunt, rem quae? Corrupti, ea perferendis, est
						nobis fugiat omnis officiis aliquid nisi voluptas, laboriosam dolore
						nemo.
					</p>
					<div className='terms'>
						<button className='terms-btn'>
							<label htmlFor='terms'>I AGREE TO THESE TERMS</label>
							<input type='checkbox' name='terms' id='terms' />
						</button>
					</div>
				</div>
			</div>
			<div className='create-contest-right'>
				<div className='contest-inner'>
					<div className='logo-div'>
						<Link to='/'>
							<img src={smallLogo} alt='logo' />
						</Link>
					</div>
					<h6>CONTEST INFORMATION</h6>
					<input
						type='text'
						name='contest-name'
						id='contest-name'
						placeholder='Contest name'
					/>
					<div className='radio-div'></div>

					<textarea
						name='contest-description'
						id='contest-description'
						cols='30'
						rows='5'
						placeholder='Description'
					></textarea>
					<input type='number' name='prize' id='prize' placeholder='Prize' />
					<input
						type='text'
						name='opening-date'
						id='opening-date'
						placeholder='Opening date'
					/>
					<input
						type='text'
						name='closing-date'
						id='closing-date'
						placeholder='Closing date'
					/>
					<input
						type='number'
						name='limit'
						id='limit'
						placeholder='Entry limit'
					/>

					<button className='pry-button'>
						CREATE CONTEST <FaArrowRight style={{ marginLeft: "0.2rem" }} />{" "}
					</button>
				</div>
			</div>
		</div>
	);
};
