import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardFooter, Flex, Spacer, Heading, Image, Text, VStack, useToast } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import TimeAgo from 'react-timeago'
import Comments from '../Components/Comments';
import { supabase } from '../SupabaseClient';

function ViewPost() {
    const [post, setPost] = useState({ timestamp: "", title: "", content: "", imageURL: "", upvoteCount: 0, comments: [] });
    const { title, id } = useParams();
    const toast = useToast();
    const navigate = useNavigate();

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

        navigate("/");

        toast({
            title: 'Story deleted successfully',
            colorScheme: 'teal',
            position: 'bottom-right',
            variant: 'left-accent',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
    }

    const updateUpvotes = async (event) => {
        event.preventDefault()

        // UPDATE the upvoteCount in state variable
        setPost(post => ({ ...post, upvoteCount: post.upvoteCount + 1 }))

        // UPDATE the selected Post in databse
        await supabase
            .from("Posts")
            .update({ upvoteCount: post.upvoteCount + 1 })
            .eq('postId', id);
    }

    if (!post) {
        return null
    }

    return (
        <Card w='full' p='4'>
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
                <VStack spacing='4' align='start'>
                    <Flex w='full' py='4' gap='4'>
                        <FontAwesomeIcon icon={faThumbsUp} onClick={updateUpvotes} size='xl' cursor='pointer' color='teal' />
                        <Text as='i'>{post.upvoteCount} upvotes</Text>
                        
                        <Spacer />
                        
                        <Link to={'/' + id + '/edit'}><FontAwesomeIcon icon={faEdit} size='xl' color='teal' /></Link>
                        <FontAwesomeIcon icon={faTrash} onClick={deletePost} size='xl' cursor='pointer' color='teal' />
                    </Flex>

                    <Comments id={id} comments={post.comments} />
                </VStack>
            </CardFooter>
        </Card>
    )
}

export default ViewPost
