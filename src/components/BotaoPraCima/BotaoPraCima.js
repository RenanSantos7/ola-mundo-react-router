import style from './BotaoPraCima.module.css'
import seta from 'assets/arrow_upward_black_24dp.svg'

// ver https://www.npmjs.com/package/react-scroll

export default function BotaoPraCima() {
    return (
        <button className={style.botaoPraCima} aria-label='seta para cima'>
            <img src={seta} alt='' />
        </button>
    )
}
