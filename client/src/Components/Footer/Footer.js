import React from 'react'

import styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={styles.Footer}>
            <section className={styles.Footer_Container}>
                <p className={styles.Title}>Get in Touch</p>
                <p className={styles.Link} onClick={props.clicked}>Let's Chat Over a Skype Interview</p>
            </section>
            <p className={styles.Trademark}>© Copyright James Kim 2020</p>
        </footer>
    )
}   

export default Footer 