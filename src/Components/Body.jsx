import styles from '../styles/Body.module.css'

function Body({CLickEventRecorder}) {
    let calculator_data = ['C', 'Del', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '=']

    let index = -1;

    let OperatorChecker = (item) => {
        if (item === "/" || item === "X" || item === "-" || item === "+") {
            return true
        }
        else {
            return false
        }
    }
    let Upper = (item) => {
        if (item === "C" || item === "Del" || item === "%") {
            return true
        }
        else {
            return false
        }
    }

    let ClassNames = (item)=>`${styles.button} ${item === "=" && styles.equal} ${OperatorChecker(item) ? styles.special : null} ${Upper(item) ? styles.Upper : null}`


    return (
        <>
            {
                calculator_data.map(
                    (item) => {
                        index++;
                        return <button onClick={()=>CLickEventRecorder(item)} key={index} className={ClassNames(item)}>
                            {item}
                        </button>
                    }
                )
            }
        </>
    )
}
export default Body;