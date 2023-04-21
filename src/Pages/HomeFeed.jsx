import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Text, Button, HStack, VStack, Heading } from '@chakra-ui/react'
import FeedCard from '../Components/FeedCard'
import { supabase } from '../SupabaseClient';

function HomeFeed() {

    const [data, setData] = useState([])

    useEffect(() => {
        //READ all the Posts
        const readPosts = async () => {
            const { data } = await supabase
                .from('Posts')
                .select()
                .order('timestamp', { ascending: true });

            console.log(data)
            // Set the retrieved posts to the state variable
            if (data.length != 0) {
                setData(data)
            }
        }
        readPosts().catch(console.error);

    }, []);

    return (
        <div className="home-feed">
            <VStack spacing={6}>
                <HStack spacing={3}>
                    <Text>Order by:</Text>
                    <Button >Newest</Button>
                    <Button>Most Popular</Button>
                </HStack>

                {
                    data && data.length > 0 ?
                    data.map((post, idx) =>
                        <Link key={'link_' + idx} to={'/' + post.title + '/' + post.postId}>
                            <FeedCard key={idx} timestamp={post.timestamp} title={post.title} upvotes={post.upvoteCount} />
                        </Link>)
                    : <Heading size='md'>No posts yet</ Heading>
                }

            </VStack>
        </div>

    )
}

export default HomeFeed
