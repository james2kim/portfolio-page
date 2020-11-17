import React from 'react'
import styles from './Project.module.css'
import 'w3-css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../../UI/Button/Button'

const project = (props) => {

return (

<div className={styles.Description}>

         <p className={styles.Text}>{props.description}</p>
    <div className={styles.Buttons}>
        <a href={props.URL} target="_blank" rel="noopener noreferrer"><Button isSecond={false} label1={"Live"} label2={<FontAwesomeIcon icon={['fas', 'laptop']}  /> }  /></a>
        <a href={props.gitURL} target="_blank" rel="noopener noreferrer"><Button isSecond={true}  label1={"Github"} label2={<FontAwesomeIcon icon={['fab', 'github']} /> }  /></a>
    </div>
</div>

)
}
export default project