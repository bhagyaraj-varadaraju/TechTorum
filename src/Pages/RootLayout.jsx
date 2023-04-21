import NavHeader from "../Components/NavHeader"
import { Outlet } from "react-router-dom"

function RootLayout() {

    return (
        <div className="root-layout">
            <NavHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
