import { Link } from "react-router-dom";
import smallLogo from "../images/Small 951.png";
import { FaCaretLeft } from "react-icons/fa";
export const InputJoinContest = () => {
	return (
		<div className='join-contest'>
			<div className='join-left'>
				<div className='join-btn'>
					<button>JOIN CONTEST</button>
					<button>CREATE CONTEST</button>
				</div>
				<div className='join-left-inner'>
					<button className='back-to-allcontest'>
						<Link to='/allContest' style={{ color: "black" }}>
							<span>
								<FaCaretLeft />
							</span>
							GO BACK TO ALL CONTEST
						</Link>
					</button>
					<h1>CONTEST NAME</h1>
					<h6>CONTEST DESCRIPTION</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
						qui soluta placeat, ullam a consequatur sapiente minima similique
						accusamus dolorum doloremque aperiam quam il
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magnam
						magni ut tempore officiis, mollitia optio dolorem quasi eius itaque
						doloremque amet quos, aliquam rep
					</p>
					<div>
						<h6>SUBMISSIONS</h6>
						<p>240 submissions / 400 enteries</p>
					</div>
				</div>
			</div>

			<div className='join-right'>
				<div className='submit-logo'>
					<Link to='/'>
						<img src={smallLogo} alt='logo' />
					</Link>
				</div>
				<div className='input-right-inner'>
					<h6>CONTEST CATEGORY</h6>
					<input type='text' />
					<textarea name='' id='' cols='30' rows='8' />
					<div>
						<p>Attach a file</p>
						<input type='file' name='entry-file' id='entry-file' title=' ' />
					</div>
					<button className='submit-btn'>SUBMIT ENTRY</button>
				</div>
			</div>
		</div>
	);
};
