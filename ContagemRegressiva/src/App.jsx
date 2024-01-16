import './App.css';
import backgroundImage from './assets/background.jpg'
import { Title } from './components/title';
import Contador from './components/Contador';
import userCountDown from './hooks/userCountDown';
import { useState } from 'react';

function App() {
  const [day,setDay] = useState()
  const [hour,setHour] = useState()
  const [minute,setMinute] = useState()
  const [second,setSecond] = useState()

  setInterval(()=>{
    
    const {dayNumber,minuteNumber,secondNumber,hourNumber} = userCountDown("Jan 1,2025 00:00:00")

    setDay(dayNumber)
    setHour(hourNumber)
    setMinute(minuteNumber)
    setSecond(secondNumber)

  },1000)


  return (
    <div className="app" style ={{backgroundImage:(`url(${backgroundImage})`)}}>
      <div className='container'>
        <Title title='Contagem Regressiva'/>
      <div className='contagem-regressiva'> 
        <Contador title='Dias' number={day}/>
        <Contador title='Horas' number={hour}/>
        <Contador title='Minutos' number={minute}/>
        <Contador title='Segundos' number={second}/>
      </div>
    </div>
    </div>
  )
}

export default App
