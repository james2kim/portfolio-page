import React from 'react'

import styles from './Button.module.css'
const button = props => {
    const renderDepending = () => {
        return props.isSecond ? styles.front2: styles.front
    }
    const renderDepending2 = () => {
        return props.isSecond ? styles.back2: styles.back
    }
return (
    <div className={styles.scene}>
        <div className={styles.card} onClick={props.clicked}>
            <div className={[styles.face, renderDepending() ].join(' ')}>{props.label1}</div>
            <div className={[styles.face, renderDepending2()].join(' ')}>{props.label2}</div>
        </div>
    </div>
)
}

export default button