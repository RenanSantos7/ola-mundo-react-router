import Banner from 'components/Banner/Banner'
import style from './Contato.module.css'

export default function Contato() {
    return (
        <main>
            <Banner />
            <div className={style.contato}>
                <h2 className={style.titulo}>Contato</h2>
                <form className={style.form}>
                    <label className={style.label}>
                        Nome
                        <input className={style.input} type='text' placeholder='Digite seu nome, por favor' />
                    </label>
                    
                    <label className={style.label}>
                        E-mail
                        <input className={style.input} type='email' placeholder='Digite seu e-mail, por favor' />
                    </label>
    
                    <label className={style.label} htmlFor='mensagem' >Mensagem
                    <textarea className={`${style.input} ${style.textarea}`} id='mensagem' placeholder='Digite aqui sua mensagem'></textarea></label>
                </form>
            </div>
        </main>
    )
}
