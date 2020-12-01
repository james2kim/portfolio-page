import React from 'react'
import sharingan from '../../assets/images/Misc/sharingan.png'
import styles from './Introduction.module.css'
const Introduction = (props) => {
    return (
        <header 
            className={[styles.Introduction, styles.drop].join(' ')} 
            id="Introduction">
            <img 
                alt="spinning-sharingan"
                className={styles.TestImage} 
                src={sharingan} />
            <div className={styles.Description}>
                <p className={styles.Name}>James Kim</p>
                <p className={styles.Job}>Software Engineer</p>
            </div>
            <span id="About"></span>
        </header>
    )
}
export default Introduction