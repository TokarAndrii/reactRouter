import React, {Component} from 'react';
import {Map} from 'react-arcgis';
import {Link} from 'react-router-dom'
import MaterialIcon from 'material-icons-react';
import styles from './content.css'

const INITIAL_STATE = {
    basemap: 'topo',
    zoom: 13,
    width: '100vw',
    height: '83.5vh',
    center: [-122.4443, 47.2529]
};


class MapPage2 extends Component {

    state = INITIAL_STATE;

/*    componentDidUpdate(){
        this.setState(state => ({basemap: this.state.basemap, zoom: 15}))
    }*/



    render() {


        const {width, height, basemap, zoom, center} = this.state;

        console.log(this.state)


        const funcBtn = () => {
            this.setState(state => ({basemap: "satellite", zoom: 15}))
        }


        return (


            <div className={styles.content}>
                <h2>Map2 page title</h2>
                <button onClick={funcBtn}>btn</button>
                <div style={{width: width, height: height}}>
                    <Map mapProperties={{basemap: basemap}}
                         viewProperties={{center: center, zoom: zoom}}
                    />
                </div>
                <Link to="/" className={styles.homeLink}>
                    <MaterialIcon icon="home"/>
                    <span className={styles.homeLinkTxt}>Go Home</span>
                </Link>
            </div>
        )


    }
}

export default MapPage2;