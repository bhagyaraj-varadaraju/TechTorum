import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'
import PostInputForm from '../Components/PostInputForm'
import { supabase } from '../SupabaseClient';

function CreatePost() {
    // For handling the form inputs
    const [info, setInfo] = useState({ title: "", content: "", image: "" });

    const createPost = async (event) => {
        event.preventDefault();

        //CREATE the Post
        await supabase
        .from('Posts')
        .insert({ title: info.title, content: info.content, imageURL: info.image});

        alert("Post created successfully");
        setInfo({ title: "", content: "", image: "" });
    }

    return (
        <Card align='center' size='lg' maxW='md'>
            <CardHeader>
                <Heading size='md'>Create your post</Heading>
            </CardHeader>

            <CardBody>
                <PostInputForm info={info} setInfo={setInfo} />
            </CardBody>

            <CardFooter>
                <Button variant='solid' colorScheme='teal' onClick={createPost}>Publish</Button>
            </CardFooter>

        </Card>
    )
}

export default CreatePost
