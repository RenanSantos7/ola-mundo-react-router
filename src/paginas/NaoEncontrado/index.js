import style from './NaoEncontrado.module.css'
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from 'components/BotaoPrincipal/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrado() {
    
    const navegar = useNavigate()

    return (
        <>
            <div className={style.conteudoContainer}>
                <div className={style.texto404}>404</div>
                
                <h1 className={style.titulo}>Ooops! Página não encontrada</h1>
                <p className={style.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={style.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                
                <div
                    className={style.botaoContainer}
                    // onClick={() => {navegar('/')}}
                    onClick={() => {navegar(-1)}} // voltar uma página
                >
                    <BotaoPrincipal tamanho={'grande'}>
                        Voltar
                    </BotaoPrincipal>
                </div>
    
                <img
                    className={style.imagemCachorro}
                    src={erro404}
                    alt='imagem de um cachorro de óculos e vestido de terno' />
            </div>
            <div className={style.espacoEmBranco}></div>
        </>
    )
}
