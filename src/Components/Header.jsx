import styles from '../styles/Header.module.css'

function Header({LowerInputValue,MainInputValue}){
    return(
        <>
        <input type="text" id={`${styles.text}`} value={MainInputValue} readOnly="readonly"/>
        <input type="text" id={styles.text2} readOnly="readonly" value={LowerInputValue}/>
        </>
    )
}
export default Header;