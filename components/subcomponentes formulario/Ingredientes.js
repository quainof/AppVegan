import styles from "../../styles/Subcomponentes.module.css"

const Ingredientes = ({ingrediente, eliminarIngrediente}) => {
  return (
    <div className={styles.contenido}>
        <div>
            <p>{ingrediente.nombreIngrediente}</p>
        </div>
        <div>
            <button type="button" className="btn-close" aria-label="Close"
                onClick={ () => eliminarIngrediente(ingrediente.nombreIngrediente)}
            ></button>
        </div>
    </div>
  )}

export default Ingredientes;
