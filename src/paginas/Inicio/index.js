import style from './inicio.module.css'
import Post from 'components/Post/Post';
import posts from 'assets/posts.json'


export default function Inicio() {
    return (
        <main>
            <ul className={style.posts}>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Post
                                post={post}
                            />
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}