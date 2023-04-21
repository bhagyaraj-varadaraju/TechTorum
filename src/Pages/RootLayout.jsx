import NavHeader from "../Components/NavHeader"
import { Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"


function RootLayout() {

    return (
        <div className="root-layout">
            <NavHeader />
            <Container m="80px auto">
                <Outlet />
            </Container>
        </div>
    )
}

export default RootLayout
