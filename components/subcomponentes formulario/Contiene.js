import styles from "../../styles/Subcomponentes.module.css"

const Contiene = ({contiene, eliminarContiene}) => {
  return (
    <div className={styles.contenido}>
        <div>
            <p>{contiene}</p>
        </div>
        <div>
            <button type="button" className="btn-close" aria-label="Close"
                onClick={ () => eliminarContiene(contiene)}
            ></button>
        </div>
    </div>
  )}

export default Contiene;
