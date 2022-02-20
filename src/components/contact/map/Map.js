import { useState } from 'react';

import classes from './Map.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const Map = () => {
	return (
		<MapContainer
			center={[22.72521748685251, 120.313546207096]}
			zoom={17}
			className={classes.map}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={[22.72521748685251, 120.313546207096]}
				draggable={true}
				animate={true}
			>
				<Popup>我的學校</Popup>
			</Marker>
		</MapContainer>
	);
};
export default Map;
