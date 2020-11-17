import React, {useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import Logo from '../../UI/Logo/Logo'
import styles from './Toolbar.module.css'
import Backdrop from './SideDrawer/Backdrop/Backdrop'
const Toolbar = (props) => {
 
const {setColor, open}  = props

  useEffect(() => {
    window.onscroll = () => {
      if(window.pageYOffset > 0 && open===false) setColor('dark')
      else if(open===true) setColor('') 
       else setColor('')
    }
  }, [open, setColor])

    return (
      <Navbar  
        className={props.color === 'dark' ?
          [styles.Navbar, styles.TransitionNav].join(' ')
          : styles.Navbar} 
        variant="dark" 
        scrolling="true" 
        fixed="top" 
        collapseOnSelect="true" 
        expand="lg">
          <div className={styles.Logo}>
            <Logo />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse 
            style={{color:'white'}}
            id="responsive-navbar-nav">
              <Backdrop />
            <Nav className={styles.Toolbar} >
              <Nav.Link 
                active 
                href="#Introduction" 
                className={styles.NavItem}>Home</Nav.Link>
              <Nav.Link 
                active 
                href="#About"  
                className={styles.NavItem}>About</Nav.Link>
              <Nav.Link 
                active 
                href="#Experience" 
                className={styles.NavItem}>Experience</Nav.Link>
              <Nav.Link 
                active 
                href="#Applications" 
                className={styles.NavItem}>Applications</Nav.Link>
              <Nav.Link 
                active 
                href="#Skills" 
                className={styles.NavItem}>Skills</Nav.Link>
              <Nav.Link 
                active 
                href="#Tools"  
                className={styles.NavItem}>Tools</Nav.Link>
              <Nav.Link 
                active 
                href="#contact"  
                className={styles.NavItem} 
                onClick={props.clicked}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default Toolbar