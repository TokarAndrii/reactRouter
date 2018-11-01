import React, {Component} from 'react'
import styles from './content.css'

export default class Home extends Component {

    render() {
        return (
            <div className={styles.content}>
                <h1>Home page title</h1>
                <div>Tis is home page text!!!!!</div>
            </div>
        )
    }
}

