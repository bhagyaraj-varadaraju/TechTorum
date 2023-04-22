import { Flex, Spacer, ButtonGroup, Heading, Link, Input } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

function NavHeader({searchInput, onSearchInputChange}) {

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' bg='teal' color='#F7FAFC' px='8' py='4'>
            <Flex gap='4'>
                <img src="/chat-balloons.png" width="40px" height="40px" alt="Logo image" />
                <Heading size='lg'>TechTorum</Heading>
            </Flex>
            
            <Spacer />
            <Input value={searchInput} onChange={({target:{value}}) => onSearchInputChange(value)} size='md' w='sm' type='text' variant='filled' color='black' _focus={{bg: 'gray.100'}} focusBorderColor='teal.500' placeholder='Search' />
            <Spacer />

            <ButtonGroup gap='2'>
                <Link as={NavLink} to='/'>Home</Link>
                <Link as={NavLink} to='/new-post'>Create New Post</Link>
            </ButtonGroup>
        </Flex>
    )
}

export default NavHeader
