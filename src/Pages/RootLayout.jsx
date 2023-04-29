import NavHeader from "../Components/NavHeader"
import { Container } from "@chakra-ui/react"
import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { SearchContext } from "../context/SearchContext"
import { Flex, Text } from "@chakra-ui/react"

function RootLayout() {
    const {searchInput, setSearchInput} = useContext(SearchContext);

    return (
        <Flex className="root-layout" direction='column' align='center' w='full'>
            <NavHeader searchInput={searchInput} onSearchInputChange={setSearchInput} />

            <Flex mb='10' p={['4', '4', '8']}>
                <Outlet />
            </Flex>

            <Flex position='absolute' w='full' justify='center' bottom='0' bg='teal.700' color='#F7FAFC' px={['2', '4', '8']} py='2'>
                <Text size='sm'>Made with ❤️ using React</Text>
            </Flex>
        </Flex>
    )
}

export default RootLayout
