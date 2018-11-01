import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import MaterialIcon from 'material-icons-react';
import styles from './content.css'
import styles2 from './map3-styles.css'


class MapPage2 extends Component {


    render() {

        return (


            <div className={styles.content}>
                <h2>MapDojo page title</h2>
                    <iframe className={styles2.mapwindow} title="map3"
                            src="http://ags-pro.ecomm.pp.ua/portal/apps/webappviewer/index.html?id=6e5ced0707fd44219eb95209680784d9">
                    </iframe>

                <Link to="/" className={styles.homeLink}>
                    <MaterialIcon icon="home"/>
                    <span className={styles.homeLinkTxt}>Go Home</span>
                </Link>
            </div>
        )


    }
}

export default MapPage2;