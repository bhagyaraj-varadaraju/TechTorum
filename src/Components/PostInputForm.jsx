import { VStack, Input, Textarea } from "@chakra-ui/react";

function PostInputForm({info, setInfo}) {

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setInfo( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return(
        <VStack spacing={8}>
            <Input variant='filled' focusBorderColor="teal.500" id="title" name="title" value={info.title} onChange={handleChange} placeholder='Title'/>

            <Textarea variant='filled' focusBorderColor="teal.500" id="content" name="content" value={info.content} onChange={handleChange} placeholder='Content'/>

            <Input variant='filled' focusBorderColor="teal.500" id="image" name="image" value={info.image} onChange={handleChange} placeholder='Image URL (Optional)'/>
        </VStack>
    )
}

export default PostInputForm
