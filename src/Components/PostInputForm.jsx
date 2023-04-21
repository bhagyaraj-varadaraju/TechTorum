import { VStack, Input, Textarea } from "@chakra-ui/react";

function PostInputForm({post, setPost}) {

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setPost( (prev) => {return {...prev, [name]:value,}} )
    }

    return(
        <VStack w='sm' spacing={8}>
            <Input variant='filled' focusBorderColor="teal.500" id="title" name="title" value={post.title} onChange={handleChange} placeholder='Title'/>

            <Textarea variant='filled' focusBorderColor="teal.500" rows='8' id="content" name="content" value={post.content} onChange={handleChange} placeholder='Content'/>

            <Input variant='filled' focusBorderColor="teal.500" id="image" name="image" value={post.image} onChange={handleChange} placeholder='Image URL (Optional)'/>
        </VStack>
    )
}

export default PostInputForm
