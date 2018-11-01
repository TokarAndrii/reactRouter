import React, {Component} from 'react'
import styles from './content.css'
import {Link, /*Route*/} from 'react-router-dom'
import {fetchAllMaps} from "../../api/index"
/*import MapWindow from "../shared/MapWindow"*/


export default class Home extends Component {
    state = {
        maps: []
    }

    async componentDidMount() {
        const list = await fetchAllMaps()
        this.setState({maps: [...list]})

    }


    render() {
        const {maps} = this.state
        const {match} = this.props
        return (
            <div className={styles.content}>
                <h2>MapList page title</h2>
                <ul className={styles.LinksList}>
                    {maps.map(curr => (
                            <li key={curr.id}>
                                <Link to={`${match.url}/${curr.id}`}>{curr.name}</Link>
                            </li>
                        )
                    )}
                </ul>
                {/*<Route path={`${match.path}/:mapId`} component={MapWindow}/>*/}
            </div>
        )
    }
}

