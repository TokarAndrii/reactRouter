import React from 'react'
import {Link} from 'react-router-dom'
import MaterialIcon from 'material-icons-react';
import {Switch, Route} from 'react-router-dom'
import Team from './Team'
import Managers from './Managers'
import MapPageAbout from './MapPageAbout'
import CustomBaseMap from './MapPage4'
import CustomBaseMap2 from './MapPage5'
import styles from './content.css'


const About = ({match}) => (
/*    console.log(match) ||*/
    <div className={styles.content}>
        <h2>About page title</h2>
        <div>Tis is about page text <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, at consequuntur culpa dolores doloribus eligendi id labore,
            nam nobis porro qui reiciendis rem saepe sed, similique temporibus voluptas voluptate voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto, at consequuntur culpa dolores doloribus eligendi id labore,
                nam nobis porro qui reiciendis rem saepe sed, similique temporibus voluptas voluptate voluptates Lorem
                ipsum dolor sit amet,
                consectetur adipisicing elit. Fuga, possimus?.
            </p>
        </div>
        <ul className={styles.aboutList}>
            <li>
                <Link to={`${match.url}/team`} className={styles.aboutListItemLink}>Team</Link>
            </li>
            <li>
                <Link to={`${match.url}/managers`} className={styles.aboutListItemLink}>Managers</Link>
            </li>
            <li>
                <Link to={`${match.url}/map`} className={styles.aboutListItemLink}>Map</Link>
            </li>
            <li>
                <Link to={`${match.url}/custom-map`} className={styles.aboutListItemLink}>Custom-Map</Link>
            </li>
            <li>
                <Link to={`${match.url}/custom-map2`} className={styles.aboutListItemLink}>Custom-Map2</Link>
            </li>
        </ul>


        <Switch>
            <Route  path={`${match.path}/team`} component={Team} />
            <Route  path={`${match.path}/managers`} component={Managers}/>
            <Route  path={`${match.path}/map`} component={MapPageAbout} />
            <Route  path={`${match.path}/custom-map`} component={CustomBaseMap} />
            <Route  path={`${match.path}/custom-map2`} component={CustomBaseMap2} />
        </Switch>
        <Link to="/" className={styles.homeLink}>
            <MaterialIcon icon="home"/>
            <span className={styles.homeLinkTxt}>Go Home</span>
        </Link>

    </div>
)

export default About



