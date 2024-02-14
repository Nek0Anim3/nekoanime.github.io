import { useState } from 'react'
import gif from './assets/gif.gif'
import gif2 from './assets/2.gif'
import {motion} from 'framer-motion'
import './App.css'
import { useNavigate } from 'react-router';


const GoChill = () => {
    const [selGif, setSelGif] = useState(gif)
    const handleMouse = () => {
      var count = 0
      var no = document.getElementById('no');
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      var randX = Math.floor(Math.random() * winWidth);
      var randY = Math.floor(Math.random() * winHeight);
      no.style.left = randX + 'px';
      no.style.top = randY + 'px';
      no.style.position = 'absolute'
      setSelGif(gif2) 
    }

  return (
    <>
    <body>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
            <motion.h1 initial={{x:0, y:0-100}} animate={{y:0}} transition={{type: "spring", stiffness: 100}} style={{color: '#eb8d9e'}}>
            Пойдёшь в чиллзон со мной?
            </motion.h1>
            <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{type: "spring", stiffness: 100}}
            src={selGif} style={{height: 'clamp (20vh, 30vh, 40vh)', margin: '20px', borderRadius: '10 %'}}/>
            <motion.div initial={{x:0, y:100}} animate={{y:0}} transition={{type: "spring", stiffness: 100}} style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
              <button className='yes' onClick={() => count+1}>Дa</button>
              <button id="no" onMouseMove={() => handleMouse()}>Het</button>
            </motion.div>
        </div>
    </body>
    </>

  )
  }

  export default GoChill