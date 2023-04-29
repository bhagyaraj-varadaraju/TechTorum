import { useState } from 'react'
import { Card, Input, InputGroup, InputRightElement, Button, VStack, Heading, Text, Spacer } from '@chakra-ui/react'
import { supabase } from '../SupabaseClient'

function Comments({ id, comments }) {
    const [comment, setComment] = useState("")

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = async (event) => {
        //Append the new comment to the front of the comments array
        comments.unshift(comment)

        //UPDATE the post with new comment
        await supabase
        .from("Posts")
        .update({ comments: comments })
        .eq('postId', id);

        setComment('')
    }

    return (
        <Card maxW={'full'} w={['xs', 'md', 'lg']} p={['2', '4', '4']} bg='gray.100' direction='column'>
            <VStack maxW={'full'} spacing={['2', '4', '4']} align='left' textAlign='left'>
                <InputGroup size={['sm', 'md', 'md']}>
                    <Input type='text' variant='outline' bg='white' borderColor="teal.500" focusBorderColor="teal.500" id="comment" name="comment" value={comment} onChange={handleChange} placeholder='Leave a comment' />
                    <InputRightElement width='5rem'>
                        <Button size={['sm', 'md', 'md']} bg='teal.500' color='white' onClick={handleSubmit} _focus={{bg: 'teal.500'}}>comment</Button>
                    </InputRightElement>
                </InputGroup>

                {
                    comments && comments.length > 0 
                    ? comments.map((comment, idx) =>  <Text overflowWrap={'break-word'} fontSize={['xs', 'sm', 'sm']} key={idx}>{comment}</Text>)
                    : <Text fontSize={['xs', 'sm', 'sm']}>No comments yet</Text>
                }
            </VStack>
        </Card>
    )
}

export default Comments
