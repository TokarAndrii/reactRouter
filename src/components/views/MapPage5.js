import React, {Component} from 'react';
import {loadModules} from 'esri-loader';

const options = {
    url: 'https://js.arcgis.com/4.6/'
};

const styles = {
    container: {
        height: '100vh',
        width: '100vw'
    },
    mapDiv: {
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%'
    },
}

class MapPage5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'loading'
        }
    }

    componentDidMount() {
        loadModules(['esri/Map', 'esri/views/MapView',"esri/layers/FeatureLayer","esri/Basemap"], options)
            .then(([Map, MapView,FeatureLayer,Basemap]) => {
                //https://community.esri.com/thread/203505-trying-to-use-own-basemap - example of create later!!!!!
                // Create a WebTileLayer with a third-party cached service
                var layer = new FeatureLayer({
                    url: "https://ags-pro.ecomm.pp.ua/server/rest/services/Odessa/Address_Odecca/MapServer"
                });

                // Create a Basemap with the WebTileLayer. The thumbnailUrl will be used for
                // the image in the BasemapToggle widget.
                var stamen = new Basemap({
                    baseLayers: [layer],
                    title: "Custom Basemap",
                    id: "myMap",
                    thumbnailUrl: "https://www.example.com/images/thumbnail_2014-11-25_61051.png"
                });
                // Add the custom basemap to the map
                var map = new Map({
                    basemap: stamen,
                    ground: "world-elevation"
                });
                const view = new MapView({
                    container: "viewDiv",
                    map,
                    zoom: 6,
                    center: [54, 23]
                });
                view.then(() => {
                    this.setState({
                        map,
                        view,
                        status: 'loaded'
                    });
                });
            })

    }

    renderMap() {
        if (this.state.status === 'loading') {
            return <div>loading</div>;
        }
    }


    render() {

        return (
            <div style={styles.container}>
                <div id='viewDiv' style={styles.mapDiv}>
                    {this.renderMap()}
                </div>
            </div>
        )
    }
}

export default MapPage5;

//https://developers.arcgis.com/documentation/core-concepts/layers/