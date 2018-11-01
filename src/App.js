import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom'
import Home from './components/views/Home'
import About from './components/views/About'
import Contact from './components/views/Contact'
import PageNotFound from './components/views/PageNotFound'
import MapPage from './components/views/MapPage'
import MapPage2 from './components/views/MapPage2'
import MapPageDojo from './components/views/MapPage3'
import MapList from './components/views/MapList'
import AppBar from './components/shared/appBar/'
import Footer from './components/shared/footer/'
import MapWindow from "./components/shared/MapWindow"
import styles from './App.css';

class App extends Component {

    render() {

        return (
            <div className={styles.App}>
                <AppBar>
                    <NavLink exact to="/" className={styles.navLinks} activeClassName={styles.activeLink}>Home</NavLink>
                    <NavLink to="/map"  className={styles.navLinks} activeClassName={styles.activeLink}>Map</NavLink>
                    <NavLink to="/map2"  className={styles.navLinks} activeClassName={styles.activeLink}>Map2</NavLink>
                    <NavLink to="/map3"  className={styles.navLinks} activeClassName={styles.activeLink}>MapDojo</NavLink>
                    <NavLink to="/maplist"  className={styles.navLinks} activeClassName={styles.activeLink}>MapList</NavLink>
                    <NavLink to="/about" className={styles.navLinks} activeClassName={styles.activeLink}>About</NavLink>
                    <NavLink to="/contact"  className={styles.navLinks} activeClassName={styles.activeLink}>Contact</NavLink>
                </AppBar>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/map" component={MapPage}/>
                        <Route path="/map2" component={MapPage2}/>
                        <Route path="/maplist/:mapId" component={MapWindow}/>
                        <Route exact path="/maplist" component={MapList}/>
                        <Route path="/map3" component={MapPageDojo}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
                <Footer>footer</Footer>
            </div>
        )
    }


}

export default App;
