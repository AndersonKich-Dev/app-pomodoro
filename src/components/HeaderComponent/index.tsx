import style from './header.module.scss'
import { FcClock } from 'react-icons/fc'
import { FaCog, FaPencilAlt, FaPrint } from 'react-icons/fa'
import { useContext } from 'react'
import { TimerContext } from '../../contexts/TimerContext'


export default function Header() {

    const { toogleSettingsMenu, background, isActive} = useContext(TimerContext)
    


    return(
        <div className={style.headerContainer} style={{backgroundColor: background}}>
            <div className={style.headerIcon}>
                <FcClock/>
                <p>Pomodoro</p>
            </div>
          

           <ul>
                <li>
                    <button disabled={isActive}>
                        <FaPrint/>
                        Print
                    </button>
                </li>
                <li>
                    <button  onClick={toogleSettingsMenu} disabled={isActive}>
                        <FaCog/>
                        Settings
                    </button>
                </li>
                <li>
                    <button disabled={isActive}>
                        <FaPencilAlt/>
                         Add Task
                    </button>
                </li>
           </ul>
        </div>
    )
}