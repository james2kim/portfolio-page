import React, {useState} from 'react';
import styles from './App.module.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Toolbar from './Components/Toolbar/Toolbar'
import Introduction from './Components/Introduction/Introduction'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Application from './Components/Application/Application'
import Skills from './Components/Skills/Skills'
import Tools from './Components/Tools/Tools'
import SideDrawer from './Components/Toolbar/SideDrawer/SideDrawer'
import Footer from './Components/Footer/Footer'

const  App = () => {

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)
  const [color, setColor] = useState('')
  const [isActive, setIsActive] = useState('Full Stack Applications')


const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false)
}

const sideDrawerToggle = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
    setColor('')
}

const isActiveHandler = (name) => {
  setIsActive(name)
}


  return (
    <main>
        <Toolbar 
          setColor={setColor} 
          clicked={sideDrawerToggle} 
          open={sideDrawerIsVisible} 
          color={color} />
      <div 
        className={styles.Background} 
        id="Introduction">
        <Introduction />
      </div>
        <About clicked={sideDrawerToggle} />
        <Experience />
        <Application 
          isActive={isActive} 
          isActiveHandler={isActiveHandler}/>
        <Skills />
        <Tools />
        <Footer clicked={sideDrawerToggle}/>
        <SideDrawer 
            open={sideDrawerIsVisible}
            closed={sideDrawerClosedHandler}/>
    </main>

  );
}

export default App;
