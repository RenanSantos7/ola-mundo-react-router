import Banner from 'components/Banner/Banner'
import styles from './Contato.module.css'

export default function Contato() {
    return (
        <main>
            <Banner />
            <div className={styles.contato}>
                <h2 className={styles.titulo}>Contato</h2>
                <form className={styles.form}>
                    <label className={styles.label}>
                        Nome
                        <input type='text' placeholder='Digite seu nome, por favor' />
                    </label>
                    
                    <label className={styles.label}>
                        E-mail
                        <input type='email' placeholder='Digite seu e-mail, por favor' />
                    </label>
    
                    <label className={styles.label} htmlFor='mensagem' >Mensagem
                    <textarea id='mensagem' placeholder='Digite aqui sua mensagem'></textarea></label>
                </form>
            </div>
        </main>
    )
}
