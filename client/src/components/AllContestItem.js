import people from "../images/Group 928.png";
import { FaArrowRight } from "react-icons/fa";
export const AllContestItem = () => {
	return (
		<div className='allcontest-item'>
			<div>
				<h6>CLIMATE ACTION</h6>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
				</p>
				<button className='allcontest-button'>
					JOIN CONTEST <FaArrowRight style={{ marginLeft: "0.2rem" }} />{" "}
				</button>
			</div>
			<div>
				<img src={people} alt='people' />
			</div>
			<div>
				<div>
					<p>Prize</p>
					<h6>$400,000</h6>
				</div>
				<div>
					<p>closing date</p>
					<h6>THUR AUG 22</h6>
					<div>
						<p>220/400 entry</p>
					</div>
				</div>
			</div>
		</div>
	);
};
