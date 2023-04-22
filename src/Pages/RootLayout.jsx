import NavHeader from "../Components/NavHeader"
import { Container } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Outlet } from "react-router-dom"
import { SearchContext } from "../context/SearchContext"


function RootLayout() {
    const {searchInput, setSearchInput} = useContext(SearchContext);

    return (
        <div className="root-layout">
            <NavHeader searchInput={searchInput} onSearchInputChange={setSearchInput} />
            <Container m="20px auto">
                <Outlet />
            </Container>
        </div>
    )
}

export default RootLayout
