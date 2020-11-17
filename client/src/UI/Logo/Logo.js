import React from 'react'

import portfolioLogo from '../../assets/images/Misc/logo.png'
import styles from './Logo.module.css'


const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img className={styles.img} src={portfolioLogo} alt="MyLogo" />
    </div>
);

export default logo;