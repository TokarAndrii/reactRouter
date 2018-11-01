import React from 'react'
import {Link} from 'react-router-dom'

const Managers = (props) => (
    console.log(props) ||
    <div>
        <h3>About {props.match.path} page header</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ad alias cumque dolor dolore ducimus eaque,
            facilis iure laudantium natus nisi, nulla odio porro provident
            quae quaerat qui quia quibusdam repellat.
        </p>
        <Link to='/about'>Back</Link>
    </div>
)


export default Managers