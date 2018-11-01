import React from 'react'
import MaterialIcon from 'material-icons-react';
import {Link} from 'react-router-dom'
import styles from './content.css'


const Contact = () => (
    <div  className={styles.content}>
        <h2>Contact page title</h2>
        <div>
            <span><b>Lorem ipsum.</b></span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A ab alias animi deserunt dolore dolores eos nam perspiciatis. Aliquid deleniti eos illum perspiciatis ratione reiciendis!</span>
            <hr/>
            <span><b>Lorem ipsum.</b></span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A ab alias animi deserunt dolore dolores eos nam perspiciatis. Aliquid deleniti eos illum perspiciatis ratione reiciendis!</span>
            <hr/>
            <span><b>Lorem ipsum.</b></span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A ab alias animi deserunt dolore dolores eos nam perspiciatis. Aliquid deleniti eos illum perspiciatis ratione reiciendis! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Assumenda ex iste modi, neque nisi nulla quaerat recusandae repellat totam voluptates.</span>
            <hr/>
            <Link to="/" className={styles.homeLink}>
                <MaterialIcon icon="home"/>
                <span className={styles.homeLinkTxt}>Go Home</span>
            </Link>
        </div>
    </div>
)

export default Contact



