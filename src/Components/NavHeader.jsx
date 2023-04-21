import { Flex, Spacer, ButtonGroup, Heading, Link } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

function NavHeader() {

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' bg='teal' color='#F7FAFC' px='8' py='4'>
        <Flex gap='4'>
            <img src="/chat-balloons.png" width="40px" height="40px" alt="Logo image" />
            <Heading size='lg'>Techorum</Heading>
        </Flex>
        <Spacer />
        <ButtonGroup gap='2'>
            <Link as={NavLink} to='/'>Home</Link>
            <Link as={NavLink} to='/new-post'>Create New Post</Link>
        </ButtonGroup>
        </Flex>
    )
}

export default NavHeader
