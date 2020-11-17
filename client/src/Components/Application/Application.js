import React from 'react'
import styles from './Application.module.css'
import Projects from './Projects/Projects'

const Application = (props) => {
const filterCriteria = ['Full Stack Applications' ,'Front End Projects', 'Data Visualizations', 'Microservices']

const filterButtons = () => {
   return filterCriteria.map((name, index) => {
        return <input
                 type="button"
                 className={props.isActive === name ? 
                  [styles.FilterButtons, styles.active].join(' ') 
                  : styles.FilterButtons}
                 value={name}
                 onClick={() => props.isActiveHandler(name)}
                 key={ name } />;
   })
}
   const filters = filterButtons()
   return  <Projects filter={filters}  section={props.isActive}  />
}

export default Application