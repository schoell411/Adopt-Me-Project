import React from "react";

class Carousel extends React.Component {
	state = {
		photos: [],
		active: 0
	};

	static getDerivedStateFromProps({ media }) {
		let photos = ["http://placecorgi.com/600x600"];

		if (media.length) {
			photos = media.map(({ large }) => large);
		}

		return { photos };
	}

	handleIndexClick = event => {
		this.setState({
			//we need 'active' to be a number
			//putting the 'unary plus' before the 'event.target...' will turn it into a number
			active: +event.target.dataset.index
		});
	};

	render() {
		const { photos, active } = this.state;

		return (
			<div className="carousel">
				<img src={photos[active]} alt="animal" />
				<div className="carousel-smaller">
					{photos.map((photo, index) => (
						//eslint-disable-next-line
						<img
							key={photo}
							onClick={this.handleIndexClick}
							data-index={index}
							src={photo}
							className={index === active ? "active" : ""}
							alt="animal thumbnail"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
