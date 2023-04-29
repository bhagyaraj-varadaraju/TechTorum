import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, useToast } from '@chakra-ui/react'
import PostInputForm from '../Components/PostInputForm'
import { supabase } from '../SupabaseClient';

const EditPost = () => {
    // For handling the form inputs
    const [post, setPost] = useState({ title: "", content: "", image: "" });
    const { id } = useParams();
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        const readPost = async () => {
            const {data} = await supabase
                                        .from("Posts")
                                        .select()
                                        .eq('postId', id);

            setPost({...data[0], image: data[0].imageURL});
        }

        readPost().catch(console.error);
    }, [])

    const updatePost = async (event) => {
        event.preventDefault();

        // UPDATE the selected Post in databse
        await supabase
        .from("Posts")
        .update({ title: post.title, content: post.content, imageURL: post.image })
        .eq('postId', id);

        navigate("/" + post.title + "/" + id);

        toast({
            title: 'Story edited successfully',
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
                <Heading size='md'>Edit this post</Heading>
            </CardHeader>

            <CardBody>
                <PostInputForm post={post} setPost={setPost} />
            </CardBody>

            <CardFooter>
                <Button variant='solid' colorScheme='teal' onClick={updatePost}>Save and publish</Button>
            </CardFooter>

        </Card>
    )
}

export default EditPost
