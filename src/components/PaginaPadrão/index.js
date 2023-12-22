import Banner from "components/Banner/Banner";
import BotaoPraCima from "components/BotaoPraCima/BotaoPraCima";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            <BotaoPraCima />
            <Outlet />
        </main>
    )
}
