import styles from './styles/App.module.css'
import Header from './Components/Header';
import Body from './Components/Body';
import { useState } from 'react';

function App() {
    let [DefaultMainInputValue, NewDefaultMainInputValue] = useState("")
    let [LowerInputState, NewLowerInputState] = useState("")

    function ClickEvent(value) {

        let isOperator = (value) => {
            let operators = ["+", "-", "X", "/", "%", "."];
            if (operators.indexOf(value) === -1) {
                return false
            }
            else {
                return true
            }
        }

        if (isOperator(value)) {
            if (!isOperator(DefaultMainInputValue[DefaultMainInputValue.length - 1])) {
                if(value==="X"){
                    value = "*"
                    NewDefaultMainInputValue(DefaultMainInputValue + value)
                }
                else{
                    NewDefaultMainInputValue(DefaultMainInputValue + value)
                }
            }
            else if (isOperator(DefaultMainInputValue[DefaultMainInputValue.length - 1])) {
                if(value==="X"){
                    value = "*"
                    NewDefaultMainInputValue(DefaultMainInputValue.slice(0, DefaultMainInputValue.length - 1) + value)
                }
                else{
                    NewDefaultMainInputValue(DefaultMainInputValue.slice(0, DefaultMainInputValue.length - 1) + value)
                }
            }
        }
        else if (value === "C") {
            NewDefaultMainInputValue("")
            NewLowerInputState("")
        }
        else if (value === "Del") {
            NewDefaultMainInputValue(DefaultMainInputValue.slice(0, DefaultMainInputValue.length - 1))
            // NewLowerInputState(LowerInputState.slice(0, LowerInputState.length - 1))
            NewLowerInputState("")
        }
        else if (parseInt(value) || value === "0") {
            NewDefaultMainInputValue(DefaultMainInputValue + value)
            NewLowerInputState("= " + eval(DefaultMainInputValue + value))
        }
        if (value === "=") {
            NewDefaultMainInputValue(eval(DefaultMainInputValue))
        }
    }

    onkeydown = (event) => {
        let array = ['%', '/', '7', '8', '9', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', ")", "("]
        if (event.key === "Backspace") {
            ClickEvent("Del")
        }
        else if (event.key === "Enter") {
            ClickEvent("=")
        }
        else if (event.key === "*" || event.key ==="X" || event.key==="x") {
            ClickEvent("X")
        }
        else if (array.indexOf(event.key) != -1) {
            ClickEvent(event.key)
        }

    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.head}>
                    <Header LowerInputValue={LowerInputState} MainInputValue={DefaultMainInputValue}></Header>
                </div>
                <div className={styles.Body}>
                    <Body CLickEventRecorder={ClickEvent}></Body>
                </div>
            </div>
        </>
    )
}

export default App;