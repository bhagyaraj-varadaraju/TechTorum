import { Image, Flex, Spacer, Heading, Input, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

function NavHeader({ searchInput, onSearchInputChange }) {

    return (
        <Flex w='full' alignItems='center' bg='teal.700' color='#F7FAFC' px={['2', '4', '8']} py={['2', '4', '4']}>
            <NavLink to='/'>
                <Flex gap={['1', '1', '2']} alignItems='center'>
                    <Image htmlHeight='28px' htmlWidth='28px' src="/chat-balloons.png" alt="Logo" />
                    <Heading display={['none', 'block', 'block']} fontSize={['md', '2xl', '3xl']}>TechTorum</Heading>
                </Flex>
            </NavLink>

            <Spacer />
            <Flex alignItems='center'>
                <Input value={searchInput} onChange={({ target: { value } }) => onSearchInputChange(value)}
                    size={['sm', 'md', 'md']} type='text' variant='filled' color='black' _focus={{ bg: 'gray.100' }}
                    focusBorderColor='teal.500' borderRadius='8' placeholder='🔍 Search' />
            </Flex>
            <Spacer />

            <Flex gap={['2', '4', '4']} alignItems='center'>
                <NavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : '' })}>
                    <Text fontSize={['xs', 'sm', 'sm']}>Home</Text>
                </NavLink>
                <NavLink to='/new-post' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : '' })}>
                    <Text fontSize={['xs', 'sm', 'sm']}>Write</Text>
                </NavLink>
            </Flex>
        </Flex>
    )
}

export default NavHeader
