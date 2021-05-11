
import styles from '../styles/Home.module.scss'
import React, { useState, useEffect } from 'react'
import { useTimeContext } from '../src/contexts/TimerContext'
import Head from 'next/head'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

type Timer = {
  initialTime: number,
  longRest: number,
  shortRest: number,
  ciclesForRest: number
}


export default function Home() {
  const [isRest, setIsRest] = useState(false)
  const [isRestOnly, setIsRestOnly] = useState(false)

  const [minutes, setMinutes] = useState([])
  const [seconds, setSeconds] = useState([])

  const [memory, setMemory] = useState(null)
  const [ciclosMemorie, setCiclosMemories] = useState(0)

  const [progress, setProgress] = useState(0)

  const [globalInitTime, setGlobalInitTime]  = useState(0)
  

  const { 
    initialTime,
    longRest, 
    shortRest, 
    ciclesForRest, 
    isActive, 
    background,
    countTimeHiddenSettings,
    toogleBackgrondColor,
    toogleIsActive 
  } = useTimeContext() 

  useEffect(()=>{
    setInitWatch(initialTime)
   
  },[initialTime])

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        startWatch()
      }, 1000);
    } else if (!isActive && memory !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, memory]);


 const calcProgressTime = () =>{
    const aux = globalInitTime - memory 
    if(!aux){
      setProgress(0)
    }else{
      const percent = (aux / globalInitTime * 100)
      setProgress(percent)
    }
    
 }

  const decrementTime = (time:number)=>{
    time = time -1
    setMemory(time)
    const min = Math.floor((time % 3600) / 60);
    const seg = time % 60;

    countTimeHiddenSettings()
    calcProgressTime()
    convertTimeForString(seg, min)
  }

  const convertTimeForString = (second:number, minute:number) =>{
    const stringSeconds = String(second).padStart(2, '0').split('')
    const stringMinuts = String(minute).padStart(2, '0').split('')
    
    setSeconds(stringSeconds)
    setMinutes(stringMinuts)
  }

  const restartInitialPomodoro = (time:number)=>{
    setInitWatch(time)
    toogleBackgrondColor('#4cd62b')
    setIsRestOnly(false)
    setIsRest(false)
    setCiclosMemories(0)
  }

  const setInitWatch = (time:number) =>{
    const notMutavel = (time * 60);

    let min = Math.floor((notMutavel % 3600) / 60);
    let seg = notMutavel % 60;

    setGlobalInitTime(notMutavel)
    setProgress(0)
    setMemory(notMutavel)
    convertTimeForString(seg, min)
  }

  const startTimeRest = (obj: Timer)=>{
    if(!isRest){
      setIsRest(true)
      toogleBackgrondColor('#f0a51b')
      if(ciclosMemorie === ciclesForRest){
        setCiclosMemories(0)
        setGlobalInitTime(obj.longRest)
        setInitWatch(obj.longRest)
      }else{
        setGlobalInitTime(obj.shortRest)
        setInitWatch(obj.shortRest)
        setCiclosMemories(memory => memory +1)
      }    

    }else{
      setIsRest(false)
      setInitWatch(obj.initialTime)
      toogleBackgrondColor('#4cd62b')
    }

    
  }

  const startRestOnly = (time:number)=>{
    setInitWatch(time)
    setIsRestOnly(true)
    toogleBackgrondColor('#f0a51b')
  }

  const startWatch = () =>{
    if(memory <= 0 && !isRestOnly){
      const objTimeSet:Timer = {
        initialTime,
        longRest,
        shortRest,
        ciclesForRest
      }
      startTimeRest(objTimeSet)
    }
    else if(memory <= 0 && isRestOnly){
      setIsRestOnly(false)
      toogleIsActive(false)
    }
    else{
      decrementTime(memory)
    }   
  }


  return (
    <div className={styles.container} style={{backgroundColor: background}}> 

      <Head>
        <title>Home | Pomodoro</title>
      </Head>

      <div className={styles.progressBar}>
        {isRest || isRestOnly ?  
        <Slider 
          max={100}
          value={progress}
          trackStyle={{backgroundColor: 'rgba(0,0,0,0.2)'}}
          railStyle={{backgroundColor: '#f3b239'}}
          handleStyle={{borderColor: 'transparent', backgroundColor: 'transparent' }}
        />
        :  <Slider 
          max={100}
          value={progress}
          trackStyle={{backgroundColor: 'rgba(0,0,0,0.2)'}}
          railStyle={{backgroundColor: '#86f769'}}
          handleStyle={{borderColor: 'transparent', backgroundColor: 'transparent' }}
        />}
      </div>
      




      <div className={styles.contador} >
       <ul>
          <li>
              <button onClick={()=>  restartInitialPomodoro(initialTime)} disabled={isActive}>Work</button>
          </li>
          <li>
            <button onClick={()=> startRestOnly(shortRest)} disabled={isActive}>Short Rest</button>
          </li>
          <li>
            <button onClick={()=> startRestOnly(longRest)} disabled={isActive}>Long Rest</button>
          </li>
       </ul>

      {
        !isRest && !isRestOnly ? (
          <span>Time to work</span>
        )
        : (
          <span>Time for a break</span>
        )
      }
      
        <div className={styles.hora}>
          <span className={styles.viewTime}>
            <p>{minutes[0]}</p>
          </span>
          <span className={styles.viewTime}>
          <p>{minutes[1]}</p>
          </span>          
            <p>:</p>         
          <span className={styles.viewTime}>
            <p>{seconds[0]}</p>
          </span>
          <span className={styles.viewTime}>
          <p>{seconds[1]}</p>
          </span>          
        </div>  

        <div className={styles.rounds} style={{visibility:isRestOnly ? 'hidden' : 'visible'}}>{`${ciclosMemorie}/${ciclesForRest}`}</div>      
      </div>

      <button className={styles.buttonStart} onClick={() => toogleIsActive(!isActive)} style={{backgroundColor: !isActive ? 'green' : 'red'}}>{!isActive ? 'Start' : 'Stop' }</button>
    </div>
  )
}


/*
 <p className={styles.viewTime}>{minutes}</p>
        <p className={styles.viewTime}>:</p>
        <p className={styles.viewTime}>{seconds}</p>
*/