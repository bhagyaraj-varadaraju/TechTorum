import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'
import PostInputForm from '../Components/PostInputForm'
import { supabase } from '../SupabaseClient';

const EditPost = () => {
    // For handling the form inputs
    const [post, setPost] = useState({ title: "", content: "", image: "" });
    const { id } = useParams();

    useEffect(() => {
        const readPost = async () => {
            const {data} = await supabase
                                        .from("Posts")
                                        .select()
                                        .eq('postId', id);

            setPost(data[0]);
        }

        readPost().catch(console.error);
    }, [])

    const updatePost = async (event) => {
        event.preventDefault()

        // UPDATE the selected Post in databse
        await supabase
        .from("Posts")
        .update({ title: post.title, content: post.content, imageURL: post.image })
        .eq('postId', id);

        window.location = "/" + post.title + "/" + id ;
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
