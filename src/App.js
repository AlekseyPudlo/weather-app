import React from "react";
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";

class App extends React.Component {
	async componentDidMount() {
		const query = 'ta';
		const proxyUrl = "https://cors-anywhere.herokuapp.com/";
		const metaWeatherUrl =
			"https://www.metaweather.com/api/location/search/?query=" + query;

		await fetch(proxyUrl + metaWeatherUrl)
			.then(res => res.json())
			.then(json => {
				console.log(json);
				json.forEach(element => {
					console.log(element);
				});
			})
			.catch(() =>
				console.log(
					"Can’t access " + metaWeatherUrl + " response. Blocked by browser?"
				)
			);
	}

	// getWether = async event => {
	// 	event.preventDefault();

	// 	const api_location_search = await fetch(
	// 		"https://www.metaweather.com/api/location/search/?query=london",
	// 		{ mode: "no-cors", cache: "no-cache" }
	// 	);

	// 	const { woeid } = await api_location_search;

	// 	console.log(api_location_search.json());
	// 	console.log(woeid);
	// };

	render() {
		return (
			<div>
				<Titles />
				<Form loadWeather={this.getWether} />
				<Weather />
			</div>
		);
	}
}

export default App;