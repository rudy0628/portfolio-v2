import classes from './Map.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const Map = () => {
	return (
		<MapContainer
			center={[25.039984067350442, 121.52075702074393]}
			zoom={17}
			className={classes.map}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={[25.039984067350442, 121.52075702074393]}
				draggable={true}
				animate={true}
			>
				<Popup>台北市</Popup>
			</Marker>
		</MapContainer>
	);
};
export default Map;
