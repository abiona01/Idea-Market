import Accordion from "react-bootstrap/Accordion";
import climateImg from "../images/image 28.png";
import { FaArrowRight } from "react-icons/fa";
const Category = () => {
	return (
		<>
			<Accordion defaultActiveKey='3' style={{ transform: "rotate(90deg)" }}>
				<Accordion.Item eventKey='0' className='zero'>
					<Accordion.Header>GENDER EQUALITY</Accordion.Header>
					<Accordion.Body>
						<img src={climateImg} alt='climate ' />
						<h4>GENDER EQUALITY</h4>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<button className='category-acc-btn'>
							JOIN CONTEST <FaArrowRight style={{ marginLeft: "0.2rem" }} />
						</button>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1' className='one'>
					<Accordion.Header>LIFE BELOW WATER</Accordion.Header>
					<Accordion.Body>
						<img src={climateImg} alt='climate ' />
						<h4>LIFE BELOW WATER</h4>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<button className='category-btn'>
							JOIN CONTEST <FaArrowRight style={{ marginLeft: "0.2rem" }} />
						</button>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='2' className='two'>
					<Accordion.Header>POVERTY</Accordion.Header>
					<Accordion.Body>
						<img src={climateImg} alt='climate ' />
						<h4>POVERTY</h4>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<button className='category-btn'>
							JOIN CONTEST <FaArrowRight style={{ marginLeft: "0.2rem" }} />
						</button>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='3' className='three'>
					<Accordion.Header>CLIMATE ACTION</Accordion.Header>
					<Accordion.Body>
						<img src={climateImg} alt='climate ' />
						<h4>CLIMATE ACTION</h4>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<button className='category-btn'>
							JOIN CONTEST <FaArrowRight style={{ marginLeft: "0.2rem" }} />
						</button>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	);
};
export default Category;
