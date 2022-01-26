import styles from "../../styles/Subcomponentes.module.css"

const Trazas = ({traza, eliminarTraza}) => {
  return (
    <div className={styles.contenido}>
        <div>
            <p>{traza}</p>
        </div>
        <div>
            <button type="button" className="btn-close" aria-label="Close"
                onClick={ () => eliminarTraza(traza)}
            ></button>
        </div>
    </div>
  )}

export default Trazas;
