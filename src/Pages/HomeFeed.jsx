import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Text, Button, HStack, VStack, Heading } from '@chakra-ui/react'
import FeedCard from '../Components/FeedCard'
import { supabase } from '../SupabaseClient';
import { SearchContext } from '../context/SearchContext';

function HomeFeed() {

    const [data, setData] = useState([])
    const [sortByNewest, setSortByNewest] = useState(true);
    const {searchInput} = useContext(SearchContext);

    useEffect(() => {
        //READ all the Posts
        readPostsSortedByTimestamp().catch(console.error);
    }, []);

    //READ all the Posts in descending order of timestamp
    const readPostsSortedByTimestamp = async() => {
        //Set the state variable to true, so the order by newest button can be disabled
        setSortByNewest(true)

        const { data } = await supabase
                .from('Posts')
                .select()
                .order('timestamp', { ascending: false });

        // Set the retrieved posts to the state variable
        if(data.length != 0) {
            setData(data)
        }
    }

    //READ all the Posts in descending order of upvotes
    const readPostsSortedByUpvotes = async() => {
        //Set the state variable to false, so the order by newest button can be enabled
        setSortByNewest(false)

        const { data } = await supabase
        .from('Posts')
        .select()
        .order('upvoteCount', { ascending: false });

        console.log(data)
        // Set the retrieved posts to the state variable
        if(data.length != 0) {
            setData(data)
        }
    }

    return (
            <VStack spacing='4'>
                <HStack spacing={['2', '4', '4']}>
                    <Text color='#F7FAFC'>Sort by:</Text>
                    <Button variant='solid' isDisabled={sortByNewest} colorScheme='teal' onClick={readPostsSortedByTimestamp}>Newest</Button>
                    <Button variant='solid' isDisabled={!sortByNewest} colorScheme='teal' onClick={readPostsSortedByUpvotes}>Most Popular</Button>
                </HStack>

                {
                    data && data.length > 0
                    ? data.filter(post => searchInput ? post.title.toLowerCase().startsWith(searchInput.toLowerCase()) : true).map((post, idx) =>
                        <Link key={'link_' + idx} to={'/' + post.title + '/' + post.postId}>
                            <FeedCard key={idx} timestamp={post.timestamp} title={post.title} upvotes={post.upvoteCount} />
                        </Link>)
                    : <Heading size='md'>No posts yet</Heading>
                }
            </VStack>
    )
}

export default HomeFeed
