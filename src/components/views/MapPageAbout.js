import React from 'react'
import { Map} from 'react-arcgis';


const MapPageAbout = () => (
    <div>
        <h2>Map page about</h2>
        <div style={{ width: '100vw', height: '570px' }}>
            <Map mapProperties={{ basemap: 'topo'}}
                 viewProperties={{center: [-122.4443, 47.2529],zoom: 13}}
            />
        </div>
    </div>
)

export default MapPageAbout
