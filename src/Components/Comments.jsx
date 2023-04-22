import { useState } from 'react'
import { Card, Input, InputGroup, InputRightElement, Button, VStack, Heading, Text } from '@chakra-ui/react'
import { supabase } from '../SupabaseClient'

function Comments({ id, comments }) {
    const [comment, setComment] = useState("")

    const handleChange = (event) => {
        setComment(event.target.value)
        console.log(comment)
    }

    const handleSubmit = async (event) => {
        comments.push(comment)

        //UPDATE the post with new comment
        await supabase
        .from("Posts")
        .update({ comments: comments })
        .eq('postId', id);

        setComment('')
    }

    return (
        <Card w='lg' p='4' bg='gray.100'>
            <VStack spacing='4' align='start'>
            <InputGroup size='md'>
            <Input type='text' variant='outline' bg='white' borderColor="teal.500" focusBorderColor="teal.500" id="comment" name="comment" value={comment} onChange={handleChange} placeholder='Leave a comment' />
                <InputRightElement width='5rem'>
                    <Button size='md' bg='teal.500' color='white' onClick={handleSubmit} _focus={{bg: 'teal.500'}}>comment</Button>
                </InputRightElement>
            </InputGroup>

            {
                comments && comments.length > 0 
                ? comments.map((comment, idx) =>  <Text size='sm' key={idx}>{comment}</Text>)
                : <Text size='sm'>No comments yet</Text>
            }
            </VStack>
        </Card>
    )
}

export default Comments
