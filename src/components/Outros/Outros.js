import style from './Outros.module.css'
import posts from 'assets/posts.json'
import PostCard from '../PostCard/PostCard'

export default function Outros({ id }) {
	const postsMenosAtual = posts.filter(post => post.id !== id)
	const postsEmbaralhados= postsMenosAtual.sort(() => Math.random() - 0.5)
    const postsSelecionados = postsEmbaralhados.slice(0, 3)

	return (
		<>
			<h2 className={style.titulo}>Outros posts que você pode gostar:</h2>
			<ul className={style.posts}>
				{postsSelecionados.map(post => {
					return (
						<li key={post.id}>
							<PostCard post={post} />
						</li>
					)
				})}
			</ul>
		</>
	)
}
