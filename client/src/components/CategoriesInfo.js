import catergory from "../images/image 15.png";
import { FaArrowRight } from "react-icons/fa";
export const CategoriesInfo = () => {
	return (
		<>
			<div className='categories-list'>
				<div className='category'>
					<div className='category-left'>
						<div>
							<h6>CLIMATE ACTION</h6>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Laboriosam ipsam inventore delectus id nostrum atque ducimus
							</p>
							<button className='category-btn'>
								JOIN CONTEST <FaArrowRight style={{ marginLeft: "0.2rem" }} />
							</button>
						</div>
					</div>
					<div className='category-right'>
						<img src={catergory} alt='category' />
					</div>
				</div>
			</div>
		</>
	);
};
