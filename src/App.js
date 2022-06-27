import React, { useState } from "react";
import { Container, ContainerItems, Button, Result } from "./styles";

const App = () => {
    const [number, setNumber] = useState(0)
    const [oldNumber, setOldNumber] = useState(0)
    const [operador, setOperador] = useState(0)

    function adicionarNum(props) {
        let num = props.target.value

        if (number === 0) {
            setNumber(num)
        } else {
            setNumber(number + num)
        }
    }


    function porcentage() {
        setNumber(number / 100)

    }
    function inversion() {
        if (number > 0) {
            setNumber(-number)
        } else {
            setNumber(Math.abs(number))
        }
    }
    function operadorHandler(props) {
        const operado = props.target.value
        setOperador(operado)
        setOldNumber(number)
        setNumber(0)
    }

    function calculador(props) {
        if (operador === "÷") {
            setNumber(parseFloat(oldNumber) / parseFloat(number))

        } else if (operador === "x") {
            setNumber(parseFloat(oldNumber) * parseFloat(number))
        }
        else if (operador === "-") {
            setNumber(parseFloat(oldNumber) - parseFloat(number))
        }
        else if (operador === "+") {
            setNumber(parseFloat(oldNumber) + parseFloat(number))
        }
        const result = props.target.value
        setOldNumber(result)

    }

    function clearNumber(num) {
        setNumber(0)
    }



    return (
        <Container >
            <h1>Calculadora</h1>
            <ContainerItems>
                <Result className="result">{number}</Result>
                <Button className={"orange duplo"} onClick={clearNumber}>AC</Button>
                <Button className="orange" onClick={inversion}>+/-</Button>
                <Button className="orange" onClick={porcentage} >%</Button>
                <Button className="orange" value="÷" onClick={operadorHandler} >÷</Button>
                <Button onClick={adicionarNum} value={7} >7</Button>
                <Button value={8} onClick={adicionarNum}  >8</Button>
                <Button value={9} onClick={adicionarNum}  >9</Button>
                <Button className="orange" value="x" onClick={operadorHandler} >x</Button>
                <Button value={4} onClick={adicionarNum} >4</Button>
                <Button value={5} onClick={adicionarNum} >5</Button>
                <Button value={6} onClick={adicionarNum} >6</Button>
                <Button className="orange" value="-" onClick={operadorHandler} >-</Button>
                <Button value={1} onClick={adicionarNum} >1</Button>
                <Button value={2} onClick={adicionarNum} >2</Button>
                <Button value={3} onClick={adicionarNum} >3</Button>
                <Button className="orange" value="+" onClick={operadorHandler} >+</Button>
                <Button className="duplo" value={0} onClick={adicionarNum} >0</Button>
                <Button value="." onClick={adicionarNum} >,</Button>
                <Button className="orange" value="=" onClick={calculador}  >=</Button>
            </ContainerItems>

        </Container >
  );
}

export default App


