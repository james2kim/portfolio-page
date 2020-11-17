import React from 'react'

import styles from './SideDrawer.module.css'
import Backdrop  from './Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from '../../../assets/documents/resume.pdf'

const sideDrawer = ( props ) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <section>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.CloseWindow} onClick={props.closed}><FontAwesomeIcon icon={['fas', 'times']} /></div>
                <div className={styles.Contact}>
                    <p className={styles.Title}>Get in Touch <span>Today</span></p>
                    <div className={styles.Description}>
                        <p className={styles.Captions}>Mobile</p>
                        <p>(562) 544-9947</p>
                    </div>

                    <div className={styles.Description}>
                        <p className={styles.Captions}>Email</p>
                        <p>pgcjameskim@gmail.com</p>
                    </div>

                    <div className={styles.Description}>
                        <p className={styles.Captions}>Location</p>
                        <p>Los Angeles County, CA</p>
                    </div>

                    <div className={styles.Icons}>
                        <a href="https://github.com/james2kim" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                        <a href="https://www.linkedin.com/in/james-kim-122015116/"  rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        <a href={Resume} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fas', 'file']} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default sideDrawer;