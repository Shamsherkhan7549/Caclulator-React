import { useState } from 'react';
import style from './Calculator.module.css';

const Calculator = () => {
  let [data, setData] = useState("")

 let getValue = (e) => {
   setData(data.concat(e.target.value))

 }

 let cutLastNum = () => {
  setData(data.slice(0, -1))
 }
    
 let cutAllNum = () => {
  setData("")
 }

 let calculatedNUm = () => {
    setData(eval(data).toString())
 }
  return (
     
    <div className= {`${style.Calculator} Container`}>

        <form action="" className={style.Text}>
          <input type="text" placeholder='0'value ={data}/>
        </form>
        

        <div className= {style.Btn}>
            <button onClick={getValue } value="(">(</button>
            <button onClick= {getValue} value=")">)</button>
            <button onClick={cutLastNum} >C</button>
            <button onClick={cutAllNum}>AC</button>

            <button onClick={getValue} value="7">7</button>
            <button onClick={getValue} value="8">8</button>
            <button onClick={getValue} value="9">9</button>
            <button onClick={getValue} value="/">/</button>

            <button onClick={getValue} value="4"> 4</button>
            <button onClick={getValue} value="5">5</button>
            <button onClick={getValue} value="6">6</button>
            <button onClick={getValue} value="*">*</button>

            <button onClick={getValue} value="1">1</button>
            <button onClick={getValue} value="2">2</button>
            <button onClick={getValue} value="3">3</button>
            <button onClick={getValue} value="-">-</button>

            <button onClick={getValue} value="0">0</button>
            <button onClick={getValue} value=".">.</button>
            <button onClick={getValue} value="+">+</button>
            <button onClick={calculatedNUm}> = </button>
        </div>
    </div>
  )
}

export default Calculator