import styles from './controllSetings.module.scss'
import React, { useContext } from 'react'
import { TimerContext } from '../../contexts/TimerContext'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function ControllTasks() {

   const { 
       createInitialTime,
       createLongRest,
       createShortRest,
       createCiclesForRest,
       initialTime, 
       longRest, 
       shortRest, 
       ciclesForRest,
       settingsMenu
    } = useContext(TimerContext)

    const handleInitialTime = (amount: number)=>{
        createInitialTime(amount)
    }

    const handleCicle = (amount: number)=>{
        createCiclesForRest(amount)
    }

    const handleShortRest = (amount: number)=>{
        createShortRest(amount)
    }

    const handleLongRest = (amount: number)=>{
        createLongRest(amount)
    }

    return(
        <div id={styles.taskContainer} className={
            !settingsMenu ? styles.hideItemMenu: styles.showItemMenu
            } >
            <section>
                <fieldset>
                    <form >
                        <legend>
                            Settings                            
                        </legend>
                        <div className={styles.controlls}>
                            <p>Work</p>
                            <span>{`${initialTime}:00`}</span>
                            <Slider 
                                max={60}
                                min={1}
                                value={initialTime}
                                onChange={handleInitialTime}
                                trackStyle={{backgroundColor: '#FF4E4D', height: 8}}
                                railStyle={{backgroundColor: 'rgba(0,0,0,0.2)',  height: 8}}
                                handleStyle={{borderColor: '#FF4E4D', backgroundColor: '#FF4E4D', width: 16, height: 16 }}
                                />          
                        </div>     
                        
                       
                         <div className={styles.controlls}>
                            <p>Long rest</p>
                            <span>{`${longRest}:00`}</span>
                            <Slider 
                                max={60}
                                value={longRest}
                                onChange={handleLongRest}
                                trackStyle={{backgroundColor: '#848B98', height: 8}}
                                railStyle={{backgroundColor: 'rgba(0,0,0,0.2)',  height: 8}}
                                handleStyle={{borderColor: '#848B98', backgroundColor: '#848B98', width: 16, height: 16 }}
                                />          
                        </div>                    

                        <div className={styles.controlls}>
                            <p>Short rest</p>
                            <span>{`${shortRest}:00`}</span>
                            <Slider 
                                max={30}
                                value={shortRest}
                                onChange={handleShortRest}
                                trackStyle={{backgroundColor: '#FF4E4D', height: 8}}
                                railStyle={{backgroundColor: 'rgba(0,0,0,0.2)',  height: 8}}
                                handleStyle={{borderColor: '#FF4E4D', backgroundColor: '#FF4E4D', width: 16, height: 16 }}
                                />          
                        </div>                   

                        <div className={styles.controlls}>
                            <p>Rounds</p>
                            <span>{ciclesForRest}</span>
                            <Slider 
                                max={10}
                                value={ciclesForRest}
                                onChange={handleCicle}
                                trackStyle={{backgroundColor: '#848B98', height: 8}}
                                railStyle={{backgroundColor: 'rgba(0,0,0,0.2)',  height: 8}}
                                handleStyle={{borderColor: '#848B98', backgroundColor: '#848B98', width: 16, height: 16 }}
                                />          
                        </div>                                
                    </form>
                    
                </fieldset>
            </section >

            {/* <section className={styles.settings}>
               <fieldset>
                    <form>
                        <legend>
                            Tasks
                        </legend>

                        <div className={styles.controlls}>
                            <label>Add task</label>
                            <input type='text'></input>
                        </div>
                    </form>
               </fieldset>

            <div className={styles.tableContainer}>
               <table>
                    <tbody>
                        <tr>
                            <td>Designe</td>
                             <td> <div style={{backgroundColor:'#e61919'}}><FaTrashAlt/></div></td>
                            <td><div style={{backgroundColor:'#cccc00'}}><FaEdit/></div></td>
                        </tr>
                        

                        <tr>
                            <td>Designe</td>
                             <td> <div style={{backgroundColor:'#e61919'}}><FaTrashAlt/></div></td>
                            <td><div style={{backgroundColor:'#cccc00'}}><FaEdit/></div></td>
                        </tr>
                      

                        <tr>
                            <td>Designe</td>
                             <td> <div style={{backgroundColor:'#e61919'}}><FaTrashAlt/></div></td>
                            <td><div style={{backgroundColor:'#cccc00'}}><FaEdit/></div></td>
                        </tr>
                        

                        <tr>
                            <td>Designe</td>
                             <td> <div style={{backgroundColor:'#e61919'}}><FaTrashAlt/></div></td>
                            <td><div style={{backgroundColor:'#cccc00'}}><FaEdit/></div></td>
                        </tr>

                        <tr>
                            <td>Designe</td>
                             <td> <div style={{backgroundColor:'#e61919'}}><FaTrashAlt/></div></td>
                            <td><div style={{backgroundColor:'#cccc00'}}><FaEdit/></div></td>
                        </tr>
                        

                        <tr>
                            <td>Designe</td>
                             <td> <div style={{backgroundColor:'#e61919'}}><FaTrashAlt/></div></td>
                            <td><div style={{backgroundColor:'#cccc00'}}><FaEdit/></div></td>
                        </tr>
                      

                        <tr>
                            <td>Designe</td>
                             <td> <div style={{backgroundColor:'#e61919'}}><FaTrashAlt/></div></td>
                            <td><div style={{backgroundColor:'#cccc00'}}><FaEdit/></div></td>
                        </tr>
                        

                        <tr>
                            <td>Designe</td>
                             <td> <div style={{backgroundColor:'#e61919'}}><FaTrashAlt/></div></td>
                            <td><div style={{backgroundColor:'#cccc00'}}><FaEdit/></div></td>
                        </tr>                      
                    </tbody>
                </table>
                </div>
            </section> */}
        </div>
    )
}