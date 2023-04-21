import { useState } from 'react'
import { Text, Button, HStack, VStack } from '@chakra-ui/react'
import TimeAgo from 'react-timeago'

function HomeFeed() {

    return (
        <div className="home-feed">
            <VStack spacing={6}>
                <HStack spacing={3}>
                    <Text>Order by:</Text>
                    <Button >Newest</Button>
                    <Button>Most Popular</Button>
                </HStack>

            </VStack>
        </div>

    )
}

export default HomeFeed
