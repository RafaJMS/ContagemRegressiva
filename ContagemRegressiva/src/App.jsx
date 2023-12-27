import './App.css';
import backgroundImage from './assets/background.jpg'
import { Title } from './components/title';
import Contador from './components/Contador';

function App() {

  return (
    <div className="app" style ={{backgroundImage:(`url(${backgroundImage})`)}}>
      <div className='container'>
        <Title title='Contagem Regressiva'/>
      <div className='contagem-regressiva'> 
        <Contador title='Dias' number='2'/>
        <Contador title='Horas' number='2'/>
        <Contador title='Minutos' number='2'/>
        <Contador title='Segundos' number='2'/>
      </div>
    </div>
    </div>
  )
}

export default App
