import style from './Post.module.css'

export default function Post({ post }) {
    return (
        <article className={style.post}>
            <img
                className={style.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt='Imagem de capa do post'
            />
            <h2 className={style.titulo}>{post.titulo}</h2>
            <button className={style.botaoLer}>Ler</button>
        </article>
    )
}
