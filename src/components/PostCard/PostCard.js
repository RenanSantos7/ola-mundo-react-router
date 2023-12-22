import { Link } from 'react-router-dom'
import style from './PostCard.module.css'
import BotaoPrincipal from 'components/BotaoPrincipal/BotaoPrincipal'

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <article className={style.post}>
                <img
                    className={style.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt='Imagem de capa do post'
                />
                <h2 className={style.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </article>
        </Link>
    )
}
