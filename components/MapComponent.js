import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useEffect } from 'react';
import useGeolocationStore from '../store/geolocation'

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Link from 'next/link';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
})

const Map = ({ branches }) => {
    const latitude = useGeolocationStore((state) => state.latitude);
    const longitude = useGeolocationStore((state) => state.longitude);
    const zoom = useGeolocationStore((state) => state.zoom);

    useEffect(()=> {
		navigator.geolocation.getCurrentPosition(function(position) {
            // console.log(position)
			// if(position) {
				useGeolocationStore.setState({ latitude: position.coords.latitude })
				useGeolocationStore.setState({ longitude: position.coords.longitude })
				useGeolocationStore.setState({ zoom: 14 })
			// }
		});
	})

    // console.log(useGeolocationStore((state) => state.latitude))
    
    return (
        <MapContainer center={[latitude, longitude]} zoom={zoom} style={{ height: 400, width: '100vw', position: 'absolute' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                branches.map((v, i) => (
                    <Marker 
                        position={[v.latitude, v.longitude]}
                        key={i}
                    >
                        <Popup>
                            <h5>{v.name}</h5>
                            <p>{v.address}</p>
                            <p>{ v.region.subDistrict.subDistrict }, { v.region.district.district }, { v.region.province.province }</p>
                            <Link href={`/cabang/${v.slug}`}>
                                <button className="btn btn-sm btn-primary text-dark rounded">
                                    Lihat Cabang
                                </button>
                            </Link>
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
};

export default Map;