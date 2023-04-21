import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'
import PostInputForm from '../Components/PostInputForm'
import { supabase } from '../SupabaseClient';

const EditPost = () => {
    // For handling the form inputs
    const [info, setInfo] = useState({ title: "", content: "", image: "" });

    return (
        <Card align='center' size='lg' maxW='md'>
            <CardHeader>
                <Heading size='md'>Edit this post</Heading>
            </CardHeader>

            <CardBody>
                <PostInputForm info={info} setInfo={setInfo} />
            </CardBody>

            <CardFooter>
                <Button variant='solid' colorScheme='teal'>Save and publish</Button>
            </CardFooter>

        </Card>
    )
}

export default EditPost
