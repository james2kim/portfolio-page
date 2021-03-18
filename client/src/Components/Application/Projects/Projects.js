import React from 'react'
import Project from './Project/Project'
import styles from './Projects.module.css'
import 'w3-css'
import Calculator from '../../../assets/images/FrontEnd/calculator.png'
import Movie from '../../../assets/images/FrontEnd/movie.png'
import Chat from '../../../assets/images/FullStack/chat.png'
import Weather from '../../../assets/images/FullStack/weather.png'
import Chloropleth from '../../../assets/images/Data/chloropleth.png'
import Treemap from '../../../assets/images/Data/treemap.png'
import Timestamp from '../../../assets/images/Microservices/timestamp.png'
import Exercise from '../../../assets/images/Microservices/exercise.png'

const Projects = (props) => {

const filterRender = () => {
    let jsx = null
    if (props.section === 'Full Stack Applications') 
        {
            jsx = <section className={[styles.Project, 'w3-animate-right'].join(' ')}>

                    <div className={styles.ProjectBg}>
                        <p className={styles.Title}>
                            JChat</p>
                        <img 
                            alt="Chat Application" 
                            src={Chat} 
                            className={styles.Images} />
                        <p className={styles.ShowDescription}>
                            A MERN Stack Chatting App where authenticated users can broadcast 
                            global messages or chat in private conversations with other users. 
                            Users can also add profile photos, and edit account information.</p>
                        <Project 
                            description="MongoDB . React.js . Node.js . Socket.io"  
                            URL='https://www.j-chat.com' 
                            gitURL='https://github.com/james2kim/Chatting-Application/'/>
                    </div>

                    <div className={styles.ProjectBg}>
                        <p className={styles.Title}>
                            Weather Now</p>
                        <img 
                            alt="Weather Application" 
                            src={Weather} 
                            className={styles.Images} />
                        <p className={styles.ShowDescription}>
                            A Full Stack Application (React, Express, Node) that fetches 
                            real time weather data from the Mapbox and WeatherStack API. </p>
                        <Project 
                            description="Node.js . React.js . API"  
                            URL='https://www.globalweathermap.com' 
                            gitURL='https://github.com/james2kim/globalweathermap'/>
                    </div>

                 </section>   
        }

           
    if  (props.section === 'Microservices') 
        {
            jsx  =  <section className={[styles.Project, 'w3-animate-left'].join(' ')}>

                        <div className={styles.ProjectBg}>
                            <p className={styles.Title}>
                              Unix Timestamp Microservice</p>
                            <img 
                              alt="Unix Timestamp API" 
                              src={Timestamp} 
                              className={styles.Images} />
                            <p className={styles.ShowDescription}>
                                An Unix Timestamp API built with Express and Node.js that converts 
                                unix time to UTC time and vice versa. </p>
                            <Project 
                            description="Node.js . Express . OOP" 
                            URL='https://jameskim-timestamp.glitch.me/' 
                            gitURL='https://github.com/james2kim/Unix-Timestamp-Microservice-FCC'/>
                        </div>
            
                        <div className={styles.ProjectBg}>
                            <p className={styles.Title}>
                                Exercise Tracker Microservice</p>
                            <img 
                              alt="Exercise Tracker" 
                              src={Exercise} 
                              className={styles.Images} />
                            <p 
                              className={styles.ShowDescription}>
                              Excercise Tracker is a minimalist full stack application (mainly an API), built with MongoDB, 
                              Express and Node.js, where users can create an account, and add and view their excercise logs.</p>
                            <Project 
                              description="MongoDB . NodeJS . Express . Rest API" 
                              URL='https://global-rumbling-mahogany.glitch.me/' 
                              gitURL='https://github.com/james2kim/Excercise-Tracker-Microservice'/>
                        </div>
                    </section>   
        }


    if (props.section === 'Front End Projects') 
        {
            jsx  =  <section className={[styles.Project, 'w3-animate-left'].join(' ')}>

                        <div className={styles.ProjectBg}>
                            <p className={styles.Title}>
                                The Movie Statistical</p>
                            <img 
                                alt="Movie App" 
                                src={Movie} 
                                className={styles.Images} />
                            <p className={styles.ShowDescription}>
                                The Movie Statistical is a front end web application that compares 
                                two movie statistics and gives an unbiased movie recommendation.</p>
                            <Project 
                                description="API . Javascript . Unit Testing" 
                                URL='https://james2kim-movie-statistical.herokuapp.com/' 
                                gitURL='https://github.com/james2kim/Movie-Statistical-App'/>
                        </div>

                        <div className={styles.ProjectBg}>
                            <p className={styles.Title}>
                                JS Calculator</p>
                            <img 
                                alt="Calculator" 
                                src={Calculator} 
                                className={styles.Images} 
                                style={{width:'250px'}} />
                            <p className={styles.ShowDescription}>
                                A fully functional Javascript Calculator 
                                built with functional programming principles.</p>
                            <Project 
                                description="Javascript .  Functional Programming" 
                                URL='https://james2kim-calculator.herokuapp.com/' 
                                gitURL='https://github.com/james2kim/Javascript-Calculator'/>
                        </div>

                    </section>   
        }

    if (props.section === 'Data Visualizations') 
        {
            jsx =  <section className={[styles.Project, 'w3-animate-right'].join(' ')}>
                        <div className={styles.ProjectBg}>
                            <p className={styles.Title}>
                                US Bachlors Degrees Chloropleth Map</p>
                            <img 
                                alt="Chloropleth Map" 
                                src={Chloropleth} 
                                className={styles.Images} />
                            <p className={styles.ShowDescription}>
                                A Javascript D3 Data Visualization of the proportion 
                                of adults with a bachelors degree.</p>
                            <Project 
                                description="D3.js . SVG Canvas . CSS" 
                                URL='https://james2kim-d3chloropleth.herokuapp.com/' 
                                gitURL='https://github.com/james2kim/D3-Cloropleth-Map'/>
                        </div>

                        <div className={styles.ProjectBg}>
                            <p className={styles.Title}>
                                Treemap Diagram </p>
                            <img 
                                alt="Treemap Diagram" 
                                src={Treemap} 
                                className={styles.Images} />
                            <p className={styles.ShowDescription}>
                                A Javascript D3 Data Visualization of the 
                                top 95 highest grossing movies of all time. </p>
                            <Project 
                                description="D3.js . Javascript . API" 
                                URL='https://james2kim-treemap-diagram.herokuapp.com/' 
                                gitURL='https://github.com/james2kim/D3-Treemap-Diagram'/>
                        </div>
                    </section>   
        }  
    return jsx
}

const projects= filterRender()

    return (
        <main className={styles.Application}>
             <h4 className={styles.Header}> Featured Applications</h4>
             <section className={styles.Filter}>
                 {props.filter}
             </section>
             <section className={styles.Projects}>
                 {projects}
             </section>
            <span id="Skills"></span>
        </main>
             
    )
}

export default Projects