import { Flex, Spacer, Heading, Input } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

function NavHeader({ searchInput, onSearchInputChange }) {

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' bg='teal' color='#F7FAFC' px='8' py='4'>
            <NavLink to='/'>
                <Flex gap='1'>
                    <img src="/chat-balloons.png" width="35px" height="35px" alt="Logo image" />
                    <Heading size='lg'>TechTorum</Heading>
                </Flex>
            </NavLink>

            <Spacer />

            <Flex gap='8' alignItems='center'>
                <Input value={searchInput} onChange={({ target: { value } }) => onSearchInputChange(value)}
                    size='md' type='text' variant='filled' color='black' _focus={{ bg: 'gray.100' }}
                    focusBorderColor='teal.500' borderRadius='8' placeholder='🔍 Search' />

                <NavLink to='/' style={({isActive})=>({textDecoration: isActive ? 'underline': ''})}>Home</NavLink>
                <NavLink to='/new-post' style={({isActive})=>({textDecoration: isActive ? 'underline': ''})}>Write</NavLink>
            </Flex>
        </Flex>
    )
}

export default NavHeader
