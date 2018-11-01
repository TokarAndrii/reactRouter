import React from 'react'
import {Link} from 'react-router-dom'
import MaterialIcon from 'material-icons-react';
import styles from './content.css'


const PageNotFound = () => (
    <div className={styles.content}>
        <h2>404 Sorry, Page You are trying Not Found!!!!!</h2>
        <Link to="/" className={styles.homeLink}>
            <MaterialIcon icon="home"/>
            <span className={styles.homeLinkTxt}>Go Home</span>
        </Link>
    </div>
)

export default PageNotFound



