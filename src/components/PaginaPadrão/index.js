//import style from './PaginaPadrao.module.css'

import Banner from "components/Banner/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}
