import './Post.css'
import posts from 'assets/posts.json'
import PostModelo from 'components/PostModelo'
import PaginaPadrao from 'components/PaginaPadrão'
import Outros from '../../components/Outros/Outros'
import NaoEncontrado from 'paginas/NaoEncontrado'
import ReactMarkdown from 'react-markdown'
import { Routes, Route, useParams } from 'react-router-dom'

export default function Post() {
	const parametros = useParams()

    const post = posts.find(post => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrado />
    }

	return (
        <Routes>
            <Route path='*' element={<PaginaPadrao/>}>
                <Route index
                    element={
                        <PostModelo
                            fotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <div className='post-markdown-container'>
                                <ReactMarkdown>
                                    {post.texto}
                                </ReactMarkdown>
                            </div>
                            <Outros id={post.id} />
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
	)
}
