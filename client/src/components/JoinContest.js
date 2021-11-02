import { Link } from "react-router-dom";
import smallLogo from "../images/Small 951.png";
import { FaCaretLeft } from "react-icons/fa";
export const JoinContest = () => {
	return (
		<div className='join-contest'>
			<div className='join-left'>
				<div className='join-btn'>
					<button>
						<Link to='/allContest' style={{ color: "black" }}>
							JOIN CONTEST
						</Link>
					</button>
					<button>
						<Link to='/createContest'>CREATE CONTEST</Link>
					</button>
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
				<div className='allcontest-logo'>
					<Link to='/'>
						<img src={smallLogo} alt='logo' />
					</Link>
				</div>
				<div className='join-right-inner'>
					<h6>CONTEST CATEGORY</h6>
					<div>
						<p>OPENING DATE</p>
						<p>Thursday, September 21, 2022</p>
					</div>
					<div>
						<p>CLOSING DATE</p>
						<p>Thursday, September 21, 2022</p>
					</div>
					<div>
						<p>NUMBER OF ENTRY</p>
						<p>400</p>
					</div>
					<div>
						<p>PRIZE</p>
						<p>$200,000,000</p>
					</div>
					<div>
						<h6>T/C</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto culpa consectetur esse modi temporibus quidem dolorum
							fuga consequuntur maxime sed cumque, ut accusantium! Et magni
							saepe excepturi reiciendis possimus aut.
						</p>
						<p>
							<strong>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Sapiente quisquam, vel pariatur, inventore minima maxime libero
								amet hic consequuntur blanditiis aliquid accusamus impedit illo
								placeat provident, ut fugiat explicabo dignissimos?
							</strong>
						</p>
					</div>
				</div>

				<div className='join-agree'>
					<label htmlFor='join-agree'>
						I AGREE TO THESE TERMS{" "}
						<input type='checkbox' name='join-agree' id='join-agree' />
					</label>

					<button>SUBMIT ENTRY</button>
				</div>
			</div>
		</div>
	);
};
