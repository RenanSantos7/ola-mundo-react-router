import { NavLink } from 'react-router-dom'
import style from './MenuLink.module.css'

export default function MenuLink({ children, path }) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${style.link} 
                ${isActive ? style.linkDestacado : ''}
            `}
            to={path}
            end
        >
            {children}
        </NavLink>
    )
}
