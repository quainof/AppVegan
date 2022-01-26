import { useRouter } from 'next/router'
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css"

const Header = () => {

    const ruta = useRouter().pathname

    return(
        <header className={styles.header}>
            
            <div className={styles.espaciado}>

                <div className={`contenedor ${styles.barra}`}>
                    <Link href="/">
                        <a className={styles.logo}>
                            <Image src="/img/logo_menu.png" width={30} height={35} alt="Imagen logo" layout="fixed"/>
                            <h3>Vegan</h3>
                        </a>
                    </Link>
                    
                    <nav className={styles.navegacion}>
                        <Link href="/">
                            <a className={ruta==="/" ? styles.marcado : styles.opcion}>
                                Inicio
                            </a> 
                        </Link>
                        <Link href="/productos">
                            <a className={ruta==="/productos" ? styles.marcado : styles.opcion}>
                                Ver Productos
                            </a>
                        </Link>
                        <Link href="/agregar-productos">
                            <a className={ruta==="/agregar-productos" ? styles.marcado : styles.opcion}>
                                Agregar Productos
                            </a>
                        </Link>
                    </nav>
                </div>

                <div className={styles.buscador}>
                    <input
                        type="search"
                        placeholder="Producto"
                        className={`form-control me-2 ${styles.campo}`}
                    />
                    <button type="button" className="btn btn-secondary">Buscar</button>
                </div>

            </div>

           

        </header>
    )}

export default Header;
