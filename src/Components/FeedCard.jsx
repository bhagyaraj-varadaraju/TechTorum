import { Heading, Card, Text, VStack } from '@chakra-ui/react'
import TimeAgo from 'react-timeago'

function FeedCard(props) {

    return (
        <Card w={['xs', 'md', 'lg']} p='4' bg='teal.50' direction='column'>
            <VStack spacing={['2', '4', '4']} align='left' textAlign='left'>
                <Text fontSize={['xs', 'sm', 'sm']}>Posted <TimeAgo date={props.timestamp} /></Text>

                <Heading fontSize={['md', 'lg', 'lg']}>{props.title}</Heading>

                <Text fontSize={['xs', 'sm', 'sm']}>{props.upvotes} upvotes</Text>
             </VStack>
        </Card>
    )
}

export default FeedCard
