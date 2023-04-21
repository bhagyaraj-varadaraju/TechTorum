import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'
import PostInputForm from '../Components/PostInputForm'
import { supabase } from '../SupabaseClient';

const EditPost = () => {
    // For handling the form inputs
    const [post, setPost] = useState({ title: "", content: "", image: "" });

    const updateUpvotes = async (event) => {
        event.preventDefault()

        // UPDATE the upvoteCount in state variable
        setPost({ title: post.title , content: post.content, imageURL: post.imageURL, upvoteCount: post.upvoteCount + 1, comments: post.comments})

        // UPDATE the selected Post in databse
        await supabase
        .from("Posts")
        .update({upvoteCount: post.upvoteCount + 1})
        .eq('postId', id);
    }

    return (
        <Card align='center' w='md'>
            <CardHeader>
                <Heading size='md'>Edit this post</Heading>
            </CardHeader>

            <CardBody>
                <PostInputForm post={post} setPost={setPost} />
            </CardBody>

            <CardFooter>
                <Button variant='solid' colorScheme='teal'>Save and publish</Button>
            </CardFooter>

        </Card>
    )
}

export default EditPost
