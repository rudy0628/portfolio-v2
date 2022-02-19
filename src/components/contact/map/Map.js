import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import classes from './Map.module.scss';

class Map extends Component {
	static defaultProps = {
		center: {
			lat: 22.725177903100818,
			lng: 120.31427576790375,
		},
		zoom: 17,
	};

	constructor() {
		super();

		this.state = {
			windowWidth: null,
		};

		window.addEventListener('resize', () => {
			this.setState({ windowWidth: window.innerWidth });
		});
	}

	componentDidMount() {
		// send Http request
		this.setState({ windowWidth: window.innerWidth });
	}

	render() {
		return (
			// Important! Always set the container height explicitly
			<div
				style={{
					height: `${this.state.windowWidth <= 850 ? '35vh' : '100%'}`,
					width: '100%',
				}}
				className={classes.map}
			>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: process.env.GOOGLE_MAP_KEY,
					}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				></GoogleMapReact>
			</div>
		);
	}
}

export default Map;
