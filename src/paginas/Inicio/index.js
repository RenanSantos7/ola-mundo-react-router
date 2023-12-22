import style from './inicio.module.css'
import PostCard from 'components/PostCard/PostCard';
import posts from 'assets/posts.json'


export default function Inicio() {
    return (
        <main>
            <ul className={style.posts}>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <PostCard
                                post={post}
                            />
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}