import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = (props) => {
    return (
        <div>
            <p>This is information for project {props.match.params.id}</p>
            <Link to='/'>Return</Link>
        </div>
    );
}

export default Portfolio;