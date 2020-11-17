import React from 'react'

import Photo from '../../../assets/images/Misc/profile-photo.png'
import styles from './ProfilePhoto.module.css'


const ProfilePhoto = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img className={styles.img} src={Photo} alt="MyLogo" />
    </div>
);

export default ProfilePhoto