import data from './data.json';

const getSeries = () => {
	return data.map((item) => item.Name);
};
const getSeriesBySearchTerm = (categoryName) => {
	return data
		.map((item) => {
			if (item.Name.match(new RegExp(categoryName, 'gi'))) {
				return item.Name;
			} else {
				return;
			}
		})
		.filter(function(element) {
			return element !== undefined;
		});
};

const getSeriesForCategory = (categoryName) => {
	let seriesItems = data.filter(
		(item) =>
			item.Name.match(new RegExp(categoryName, 'gi')) ||
			(item.TeaserText && item.TeaserText.match(new RegExp(categoryName, 'gi')))
	);

	const seriesItemsWithNumbering = seriesItems.filter((item) => item.Name.match(/#\d+/));

	let seriesCategory = {};

	seriesItemsWithNumbering.forEach((item) => {
		const matches = item.Name.match(/(.+)#\d/);
		seriesCategory[matches[1]] = seriesCategory[matches[1]] || [];
		seriesCategory[matches[1]].push(item);
	});

	const seriesItemsSorted = Object.keys(seriesCategory).map(function(catName) {
		const categoryItems = seriesCategory[catName];
		return {
			name: catName,
			items: categoryItems.sort((a, b) => (a.Name > b.Name ? 1 : -1))
		};
	});

	return seriesItemsSorted;
};

export { getSeriesForCategory, getSeries, getSeriesBySearchTerm };
