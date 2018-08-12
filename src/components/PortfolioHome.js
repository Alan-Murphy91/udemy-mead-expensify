import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioHome = () => (
        <div>
            <h1>This is my home page</h1>
            <p>Please see below links to my projects</p>
            <Link to='/portfolio/1'>Project 1</Link>
            <Link to='/portfolio/2'>Project 2</Link>
            <Link to='/portfolio/3'>Project 3</Link>
        </div>
);

export default PortfolioHome;