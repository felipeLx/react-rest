import React from 'react';

import apiLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={apiLogo} alt="MyAPILogo" />
    </div>
);

export default logo;