import styles from "../styles/Mensaje.module.css"

const Mensaje = ({children}) => {
  return(
      <div className={styles.mensaje}>
        <p>{children}</p> 
      </div>
)}

export default Mensaje;
