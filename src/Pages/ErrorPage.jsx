import { useRouteError } from "react-router-dom"
import { Card, Flex, Heading, Text, Spacer } from "@chakra-ui/react"

function ErrorPage() {
    const Caughterror = useRouteError()
    if (!Caughterror || !Caughterror.error) {
        return
    }

    console.error(Caughterror)

    return (
        <Flex className='root-layout' direction='column' align='center' w='full'>
            <Card w={['xs', 'md', 'lg']} p={['4', '8', '8']} bg='teal.50' my='auto' gap='2'>
                <Heading fontSize={['md', 'lg', 'lg']}>Oops!</Heading>
                <Text fontSize={['md', 'lg', 'lg']}> Sorry, an unexpected error has occurred. </Text>
                <Spacer />
                <Text fontSize={['md', 'lg', 'lg']}>
                    <b> <i> {Caughterror.status} - {Caughterror.statusText} </i> </b>
                    <br />
                    <i> {Caughterror.error.message} </i>
                </Text>
            </Card>
        </Flex>
    )
}

export default ErrorPage
