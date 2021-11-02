import people from "../images/Group 928.png";
import { FaArrowRight } from "react-icons/fa";
export const ContentDetails = () => {
	return (
		<div className='content-details'>
			<div className='content-left'>
				<h6>CLIMATE ACTION</h6>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
					consectetur voluptatum tenetur dicta.
				</p>
				<div className='content-info'>
					<div className='content-info-left'>
						<p>Price</p>
						<h6>400,000</h6>
						<p className='entry-info'>220/300 entry</p>
					</div>
					<div className='content-info-right'>
						<p>Closing date</p>
						<h6>THUR, AUG 22, 2021</h6>
					</div>
				</div>
				<button className='content-btn'>
					JOIN CONTEST <FaArrowRight style={{ marginLeft: "0.2rem" }} />
				</button>
			</div>
			<div className='content-right'>
				<img src={people} alt='people' />
			</div>
		</div>
	);
};
