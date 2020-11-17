import React from 'react'
import styles from './Tools.module.css'

const skills = () => {
    return (
        <section className={styles.Skills}>
            <h4>Tools</h4>
            <div className={styles.Container}>
                <div className={styles.Grid}>
                {/* ToolSets */}
                    <div className={styles.Box}>
                        <i className="devicon-git-plain"></i>
                        <p>Git</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-github-plain"></i>
                        <p>Github</p>
                    </div>
                    
                    <div className={styles.Box}>
                        <i className="devicon-visualstudio-plain"></i>
                        <p>Visual Studio</p>
                    </div>

                    <div className={styles.Box}>
                         <i className="devicon-amazonwebservices-original"></i>
                        <p>AWS</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-npm-original-wordmark"></i>
                        <p>NPM</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-heroku-original"></i>
                        <p>Heroku</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-webpack-plain"></i>
                        <p>Webpack</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-babel-plain"></i>
                        <p>Babel</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-chrome-plain"></i>
                        <p>Chrome Dev Tools</p>
                    </div>
                    
                    <div className={styles.Box}>
                        <i className="devicon-yarn-plain"></i>
                        <p>Yarn</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-nodewebkit-plain"></i>
                        <p>Nodewebkit</p>
                    </div>

                    <div className={styles.Box}>
                        <i className="devicon-sketch-line" style ={{fontWeight:'bold'}}></i>
                        <p>Sketch</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default skills