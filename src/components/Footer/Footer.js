import style from './Footer.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Footer() {
    return (
        <footer className={style.rodape}>
            <MarcaRegistrada />            
            <span>Desenvolvido por Alura.</span>
        </footer>
    )
}
