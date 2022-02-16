import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
	static defaultProps = {
		center: {
			lat: 22.725177903100818,
			lng: 120.31427576790375,
		},
		zoom: 17,
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '100%', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDi-4yH3YT67fwCOVfDRhL8M9c6qSbVPeE' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				></GoogleMapReact>
			</div>
		);
	}
}

export default Map;
