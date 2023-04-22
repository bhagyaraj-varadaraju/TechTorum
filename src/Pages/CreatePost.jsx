import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'
import PostInputForm from '../Components/PostInputForm'
import { supabase } from '../SupabaseClient';

function CreatePost() {
    // For handling the form inputs
    const [post, setPost] = useState({ title: "", content: "", image: "" })

    const createPost = async (event) => {
        event.preventDefault()

        //CREATE the Post
        await supabase
        .from('Posts')
        .insert({ title: post.title, content: post.content, imageURL: post.image, comments: []})

        setPost({ title: "", content: "", image: "" })
        window.location = "/";
    }

    return (
        <Card align='center' w='md'>
            <CardHeader>
                <Heading size='md'>Create your post</Heading>
            </CardHeader>

            <CardBody>
                <PostInputForm post={post} setPost={setPost} />
            </CardBody>

            <CardFooter>
                <Button variant='solid' colorScheme='teal' onClick={createPost}>Publish</Button>
            </CardFooter>

        </Card>
    )
}

export default CreatePost
