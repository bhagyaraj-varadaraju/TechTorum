import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, useToast } from '@chakra-ui/react'
import PostInputForm from '../Components/PostInputForm'
import { supabase } from '../SupabaseClient';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    // For handling the form inputs
    const [post, setPost] = useState({ title: "", content: "", image: "" });
    const toast = useToast();
    const navigate = useNavigate();

    const createPost = async (event) => {
        event.preventDefault();

        //CREATE the Post
        const resp = await supabase
        .from('Posts')
        .insert({ title: post.title, content: post.content, imageURL: post.image, comments: []})
        .select();

        setPost({ title: "", content: "", image: "" });

        navigate("/" + post.title + "/" + resp.data[0].postId);

        toast({
            title: 'Story created successfully',
            colorScheme: 'teal',
            position: 'bottom-right',
            variant: 'left-accent',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
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
