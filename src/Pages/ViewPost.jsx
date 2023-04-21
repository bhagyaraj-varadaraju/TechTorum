import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import TimeAgo from 'react-timeago'
import Comments from '../Components/Comments';
import { supabase } from '../SupabaseClient';

function ViewPost() {
    const [post, setPost] = useState({ timestamp:"", title: "", content: "", imageURL: "", upvoteCount: 0, comments:[]});
    const { title, id } = useParams();

    useEffect(() => {
        const readPost = async () => {
            // GET the selected Post
            const { data } = await supabase
                .from("Posts")
                .select()
                .eq('postId', id);

            // Set the retrieved post data to the state variable
            if (data && data.length != 0) {
                setPost(data[0]);
            }
        }

        readPost().catch(console.error);
    }, [])

    const deletePost = async (event) => {
        event.preventDefault();

        // DELETE the selected Post
        await supabase
        .from("Posts")
        .delete()
        .eq('postId', id);

        alert("Post deleted successfully");
        window.location = "/";
    }

    const updateUpvotes = async (event) => {
        event.preventDefault()

        // UPDATE the upvoteCount in state variable
        setPost(post => ({...post, upvoteCount: post.upvoteCount + 1}))

        // UPDATE the selected Post in databse
        await supabase
        .from("Posts")
        .update({upvoteCount: post.upvoteCount + 1})
        .eq('postId', id);
    }

    if (!post) {
        return null
    }

    return (
        <Card w='lg' h='lg' p='4'>
            <CardBody>
            <VStack spacing='4' align='start'>
                <Text>Posted <TimeAgo date={post.timestamp} /></Text>

                <Heading size='md'>{post.title}</Heading>

                <Text textAlign='left'>{post.content}</Text>

                {post.imageURL &&
                    <Image
                    src={post.imageURL}
                    alt={post.title}
                    borderRadius='lg'
                  />
                }
            </VStack>
            </CardBody>

            <CardFooter>
                <Button variant='solid' colorScheme='teal' onClick={updateUpvotes}>Like</Button>
                <Text>{post.upvoteCount}</Text>
                <Link to={'/' + id + '/edit'}><Button variant='solid' colorScheme='teal'>Edit</Button></Link>
                <Button variant='solid' colorScheme='teal' onClick={deletePost}>Delete</Button>
                <Comments comments={post.comments}/>
            </CardFooter>

        </Card>
    )
}

export default ViewPost
