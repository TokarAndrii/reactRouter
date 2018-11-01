import React from 'react'
import MaterialIcon from 'material-icons-react';
import {Map} from 'react-arcgis';
import {Link} from 'react-router-dom'
import styles from './content.css'


const MapPage = () => (
    <div  className={styles.content}>
        <h2>Map page title</h2>
        <div style={{ width: '100vw', height: '83.5vh' }}>
            <Map mapProperties={{ basemap: 'topo'}}
                 viewProperties={{center: [-122.4443, 47.2529],zoom: 13}}
            />
        </div>,
        <Link to="/" className={styles.homeLink}>
            <MaterialIcon icon="home"/>
            <span className={styles.homeLinkTxt}>Go Home</span>
        </Link>
    </div>
)

export default MapPage



