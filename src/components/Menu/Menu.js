import MenuLink from '../MenuLink/MenuLink'
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink path='/' > Inicio</MenuLink>
                <MenuLink path='/sobre-mim'>Sobre mim</MenuLink>
                <MenuLink path='/contato'>Contato</MenuLink>
            </nav>
        </header>
    )
}
