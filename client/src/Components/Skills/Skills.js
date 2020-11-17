import React from 'react'
import styles from './Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const skills = () => {
    return (
        <section className={styles.Skills}>
            <h4>
                Technical Skills</h4>
            <div className={styles.Container}>
                <div className={styles.Grid}>
                    {/* Skillsets */}
                    <div className={styles.Box}>
                        <FontAwesomeIcon icon={['fab', 'react']} />
                        <p>React</p>
                    </div>

                    <div className={styles.Box}>
                        <FontAwesomeIcon icon={['fab', 'js']} />
                        <p>Javascript</p>
                    </div>

                    <div className={styles.Box}>
                        <FontAwesomeIcon icon={['fab', 'node']} />
                        <p>Node.js</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-mongodb-plain"></i>
                        <p>MongoDB</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-express-original"></i>
                        <p>Express</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-d3js-plain"></i>
                        <p>D3.js</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-postgresql-plain"></i>
                        <p>PostgreSQL</p>
                    </div>

                    <div className={styles.Box}>
                        <img 
                            className={styles.Img} 
                            alt="Mocha" 
                            src="https://camo.githubusercontent.com/af4bf83ab2ca125346740f9961345a24ec43b3a9/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667" />
                        <p>Mocha.js</p>
                    </div>

                    <div className={styles.Box}>
                        <img 
                            className={styles.Img} 
                            alt="ChaiJS" 
                            src="https://camo.githubusercontent.com/431283cc1643d02167aac31067137897507c60fc/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67" />
                        <p>Chai</p>
                    </div>
                    
                    <div className={styles.Box}>
                        <FontAwesomeIcon icon={['fab', 'css3-alt']} />
                        <p>CSS3</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-bootstrap-plain"></i>
                        <p>Bootstrap</p>
                    </div>

                    <div className={styles.Box}>
                        <FontAwesomeIcon icon={['fab', 'html5']} />
                        <p>HTML5</p>
                    </div>

                </div>
            </div>
            <span id="Tools"></span>
        </section>
    )
}

export default skills