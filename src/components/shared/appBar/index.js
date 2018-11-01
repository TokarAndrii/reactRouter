import React from 'react'
import styles from './appbar.css'

const AppBar = ({children}) => (<header className={styles.header}>{children}</header>);


export default AppBar;