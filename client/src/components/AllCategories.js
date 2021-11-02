import { CategoriesInfo } from "./CategoriesInfo";

const AllCategories = () => {
	return (
		<section className='category-section'>
			<div className='title'>
				<h2>ALL CATEGORIES</h2>
			</div>
			<CategoriesInfo />
			<CategoriesInfo />
			<CategoriesInfo />
			<CategoriesInfo />
		</section>
	);
};

export default AllCategories;
