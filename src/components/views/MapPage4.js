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

class MapPage4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'loading'
        }
    }

    componentDidMount() {
        loadModules(['esri/Map', 'esri/views/MapView',"esri/layers/WebTileLayer","esri/Basemap"], options)
            .then(([Map, MapView,WebTileLayer,Basemap]) => {
                // Create a WebTileLayer with a third-party cached service
                var mapBaseLayer = new WebTileLayer({
                    urlTemplate: "https://stamen-tiles-{subDomain}.a.ssl.fastly.net/terrain/{level}/{col}/{row}.png",
                    subDomains: ["a", "b", "c", "d"],
                    copyright: "Map tiles by <a href=\"http://stamen.com/\">Stamen Design</a>, " +
                    "under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. " +
                    "Data by <a href=\"http://openstreetmap.org/\">OpenStreetMap</a>, " +
                    "under <a href=\"http://creativecommons.org/licenses/by-sa/3.0\">CC BY SA</a>."
                });

// Create a Basemap with the WebTileLayer. The thumbnailUrl will be used for
// the image in the BasemapToggle widget.
                var stamen = new Basemap({
                    baseLayers: [mapBaseLayer],
                    title: "Terrain",
                    id: "terrain",
                    thumbnailUrl: "https://stamen-tiles.a.ssl.fastly.net/terrain/10/177/409.png"
                });
                // Add the custom basemap to the map
                var map = new Map({
                    basemap: stamen,
                    ground: "world-elevation"
                });
                const view = new MapView({
                    container: "viewDiv",
                    map,
                    zoom: 14,
                    center: [78.4867, 17.3850]
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

export default MapPage4;