import { Heading, Card, CardHeader, CardBody, CardFooter, Text, VStack } from '@chakra-ui/react'
import TimeAgo from 'react-timeago'

function FeedCard(props) {

    return (
        <Card w='lg' p='4'>
            <VStack spacing='4' align='start'>
                <Text>Posted <TimeAgo date={props.timestamp} /></Text>

                <Heading size='md'>{props.title}</Heading>

                <Text>{props.upvotes} upvotes</Text>
            </VStack>
        </Card>
    )
}

export default FeedCard
