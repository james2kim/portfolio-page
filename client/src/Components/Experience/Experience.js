import React from 'react'
import styles from './Experience.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const experience = () => {

    return (
        <section className={styles.Experience}>
            <div className={styles.Category}>
                <FontAwesomeIcon 
                    className={styles.Logo} 
                    icon={['fab', 'free-code-camp']} />
                <h4 className={[styles.underline, styles.Title1].join(' ')}>Education</h4>
                <p className={styles.Text}>
                    <span className={styles.Title}>
                        freeCodeCamp 
                    </span><br />Full Stack Web Development</p>
            
                <p className={styles.Text}>
                    <span className={styles.Title}>
                        University of Southern California
                    </span><br/>BA, Economics</p>
            </div>

            <div className={styles.Category}>
                <FontAwesomeIcon  
                    className={styles.Logo} 
                    icon={['fas', 'briefcase']} />
                <h4 className={[styles.underline, styles.Title1].join(' ')}> Experience</h4>
                <p className={styles.Text}>
                    <span className={styles.Title}>
                        Jayu Real Estate
                    </span><br/>Website Creator</p>
                <p className={styles.Text}>
                    <span className={styles.Title}>
                        Youtube: How to Solve Algorithms
                    </span><br/>Content Creator</p>
            </div>

            <div className={styles.Category}>
                <FontAwesomeIcon 
                    className={styles.Logo} 
                    icon={['fas', 'code-branch']} />
                <h4 className={[styles.underline, styles.Title1].join(' ')}>Interests</h4>
                <p className={styles.Text}>
                    <span className={styles.Title}>
                        Web and App Development
                    </span><br/>I'm always looking to create original, <br/>
                    creative, and highly performant apps
                </p>
                <p className={styles.Text}>
                    <span className={styles.Title} 
                    id="Applications">
                        Automation
                    </span><br/>Interested in discovering new ways to automate<br/> 
                    daily tasks through web technologies
                </p>
            </div>
        </section>
    )
}

export default experience