import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Card, Flex, Spacer, Heading, Image, Text, VStack, useToast } from '@chakra-ui/react';
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
        <Card w={['xs', 'md', 'lg']} p={['4', '8', '8']} bg='teal.50' direction='column'>
                <VStack spacing={['2', '4', '4']} align='left' textAlign='left'>
                    <Text fontSize={['xs', 'sm', 'sm']}>Posted <TimeAgo date={post.timestamp} /></Text>

                    <Heading fontSize={['md', 'lg', 'lg']}>{post.title}</Heading>

                    <Text fontSize={['md', 'lg', 'lg']}>{post.content}</Text>

                    {post.imageURL &&
                        <Image
                            src={post.imageURL}
                            alt={post.title}
                            borderRadius='lg'
                        />
                    }
                </VStack>
            
                <VStack mt={['8', '16', '16']} spacing={['2', '4', '4']} align='left' textAlign='left'>
                    <Flex w='full' gap={['2', '4', '4']} direction='row' align='center'>
                        <FontAwesomeIcon icon={faThumbsUp} onClick={updateUpvotes} size='xl' cursor='pointer' color='teal' />
                        <Text fontSize={['xs', 'sm', 'sm']}as='i'>{post.upvoteCount} upvotes</Text>

                        <Spacer />

                        <Link to={'/' + id + '/edit'}><FontAwesomeIcon icon={faEdit} size='xl' color='teal' /></Link>
                        <FontAwesomeIcon icon={faTrash} onClick={deletePost} size='xl' cursor='pointer' color='teal' />
                    </Flex>

                    <Comments id={id} comments={post.comments} />
                    
                </VStack>
        </Card>
    )
}

export default ViewPost
