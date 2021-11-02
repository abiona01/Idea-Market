import Carousel from "react-multi-carousel";
import { ContentDetails } from "./ContentDetails";

const Contest = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 600 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div className='home-contest'>
			<h2>ALL CONTESTS</h2>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition='all .5'
				transitionDuration={500}
				containerClass='carousel-container'
				deviceType='desktop'
				dotListClass='custom-dot-list-style'
				itemClass='carousel-item-padding-40-px'
			>
				<div>
					<ContentDetails />
				</div>
				<div>
					<ContentDetails />
				</div>
				<div>
					<ContentDetails />
				</div>
				<div>
					<ContentDetails />
				</div>
				<div>
					<ContentDetails />
				</div>
				<div>
					<ContentDetails />
				</div>
				<div>
					<ContentDetails />
				</div>
			</Carousel>
		</div>
	);
};
export default Contest;
