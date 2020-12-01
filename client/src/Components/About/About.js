import React from 'react'
import styles from './About.module.css'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../UI/Button/Button'
import Resume from '../../assets/documents/resume.pdf'

const About = (props) => {


return (
    <section className={styles.About}>
        <div><ProfilePhoto /></div>
        <div className={styles.Text}>
            <p className={styles.Title}>I am a Full Stack Developer</p>

            <p>Hi, my name is <strong>James</strong>, and I'm a Full Stack Developer who 
                strives to build highly functional and performant web applications.
                I enjoy taking an idea or the foundations of one, and turning it  
                into a beautiful, highly functional application built through clean, reusable, and flawlessly designed code.
               I am well versed in MongoDB, Express, React.js + Redux, and Node.js 
               when developing, but I always strive to learn new technologies. </p> 
               
            <p>My interest in software engineering begin during the latter half of my undergraduate education, where I devoted the majority of my free time teaching myself web technologies, computer science, and application design patterns.
                Shortly after graduating from the University of Southern California, I joined the engineering team at Jayu Real Estate where I worked on developing a product and administration platform, optimizing performance for multiple SPA's, and improving production grade security and authentication for admin accounts. </p>
               
            <p> In addition to my personal projects and personal development, I take the time to contribute to the online developer community. 
                I have an active Youtube series that teaches other coders how to understand and solve 
                algorithms and coding challenges. Aside from coding, I like to take the time to relax by playing Fortnite, spending time with my family and friends, 
                or making a travel itinerary for my next trip abroad (after the pandemic of course). </p>
            <div className={styles.Icons}>
                <a 
                    href="https://github.com/james2kim" 
                    rel="noopener noreferrer" 
                    target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <a 
                    href="https://www.linkedin.com/in/james-kim-122015116/"  
                    rel="noopener noreferrer" 
                    target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                <a 
                    href="https://www.facebook.com/profile.php?id=757861169"  
                    rel="noopener noreferrer" 
                    target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                <a 
                    href="https://www.youtube.com/channel/UCYFBD7Bk_rkwskc3cYtoJmQ?view_as=subscriber"  
                    rel="noopener noreferrer" 
                    target="_blank"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
            </div>
            <div className={styles.Buttons}>
                <div onClick={props.clicked}>
                    <Button 
                        isSecond={false} 
                        label1={"Let's Collaberate"} 
                        label2={<FontAwesomeIcon 
                        icon={['fas', 'user-friends']} /> } />
                </div>
                <div>
                    <a 
                    href={Resume}
                    target="_blank" 
                    rel="noopener noreferrer">
                        <Button 
                            isSecond={true}  
                            label1={"Resume"} 
                            label2={<FontAwesomeIcon 
                            icon={['fas', 'file']} /> } />
                    </a>
                </div>
            </div>
            <span id="Experience"></span>
        </div>
    </section>
)
}

export default About 