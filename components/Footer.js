import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/productos">Ver Productos</Link>
                    <Link href="/agregar-productos">Agregar Productos</Link>
                </nav>
                <Link href="/">
                    <a className={styles.copyright}>
                        Todos los derechos reservados
                    </a>  
                </Link>
            </div>
        </footer>
    )
}

export default Footer
