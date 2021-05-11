
import { createContext, useContext, useState } from 'react'



type TimeState = {
    initialTime: number,
    longRest: number,
    shortRest: number,
    ciclesForRest: number,
    background: string,
    isActive: boolean,
    settingsMenu: boolean,
   

    countTimeHiddenSettings:() => void,
    toogleSettingsMenu:() => void,
    toogleBackgrondColor: (color: string) => void,
    toogleIsActive: (value: boolean) => void,
    createInitialTime: (time: number) => void,
    createShortRest: (time: number) => void,
    createLongRest: (time: number) => void,
    createCiclesForRest: (time: number) => void
}


export const TimerContext = createContext({} as TimeState)

export function TimerContextProvider({children}){
  
  const [initialTime, setInitialTime] = useState(25)
  const [ciclesForRest, setCiclesForRest] = useState(4)
  const [shortRest, setShortRest] = useState(2)
  const [longRest, setLongRest] = useState(5) 
  const [isActive, setIsActive] = useState(false)
  const [background, setBackground] = useState('#4cd62b')
  const [settingsMenu, setSettingsMenu] = useState(true)
  const [timeHiddenSettings, setTimeHiddenSettings] = useState(0)

 
function countTimeHiddenSettings(){
  if(timeHiddenSettings < 3 && settingsMenu){
    setTimeHiddenSettings(count => count + 1)
  } 
  else if(timeHiddenSettings === 3 && settingsMenu){
    setTimeHiddenSettings(0)
    setSettingsMenu(false)
  }
}

function toogleSettingsMenu(){
  !isActive ? setSettingsMenu(!settingsMenu) : ''
}

function toogleBackgrondColor(color: string){
  setBackground(color)
}

function createInitialTime(time:number){
  setInitialTime(time)
}

function createShortRest(time:number){
  setShortRest(time)
}

function createLongRest(time:number){
  setLongRest(time)
}

function createCiclesForRest(time:number){
  setCiclesForRest(time)
}

function toogleIsActive(value: boolean){
  setIsActive(value)
}

  return (
    <TimerContext.Provider value={{
      initialTime,
      longRest, 
      shortRest, 
      ciclesForRest, 
      isActive,
      background,
      settingsMenu,
  
      countTimeHiddenSettings,
      toogleBackgrondColor,
      createInitialTime,
      createShortRest,
      createLongRest,
      createCiclesForRest,
      toogleIsActive,
      toogleSettingsMenu
     }}>
       {children}
     </TimerContext.Provider>
  )
}


export const useTimeContext =()=>{
  return useContext(TimerContext)
}