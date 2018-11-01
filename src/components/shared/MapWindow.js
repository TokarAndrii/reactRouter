import React, {Component} from 'react'
import {fetchByIdMap} from "../../api/index"
import styles from '../views/map3-styles.css'

const getId = props => props.match.params.mapId

export default class MapWindow extends Component {

    state = {
        id: '',
        title: '',
        url: '',
        name: ''
    }

    async componentDidMount() {
        const map = await fetchByIdMap(getId(this.props))
        console.log(map)
        this.setState({...map})

    }


    async componentDidUpdate(prevProps, prevState) {
        const prevId = getId(prevProps)
        const nextId = getId(this.props)

        if (prevId !== nextId) {
            const map = await fetchByIdMap(nextId)
            this.setState({...map})

        }
    }

    shouldComponentUpdate(nextProps, nextState,nextContext){
        const prevId = getId(this.props)
        const nextId = getId(nextProps)

        return prevId!==nextId || this.state.id!==nextState.id
    }

    render() {
        const {title, url} = this.state

        console.log('[MapWindow]: ', this.props)

        return (
            <div>
                <h3>{title}</h3>
                <p style={{height: '100px'}}>map from  - {url}</p>
                <iframe className={styles.mapwindow} title="map3"
                        src="http://ags-pro.ecomm.pp.ua/portal/apps/webappviewer/index.html?id=6e5ced0707fd44219eb95209680784d9">
                </iframe>
            </div>
        )
    }
}