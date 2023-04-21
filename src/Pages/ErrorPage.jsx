import { useRouteError } from "react-router-dom"
import { Card } from "@chakra-ui/react"

function ErrorPage() {
    const Caughterror = useRouteError()
    if (!Caughterror || !Caughterror.error) {
        return
    }

    console.error(Caughterror)

    return (
        <Card w='md' h='xs' mt="200" mx='auto' pt='20'>
            <h1> Oops! </h1>
            <p> Sorry, an unexpected error has occurred. </p>
            <br />
            <p>
                <b> <i> {Caughterror.status} - {Caughterror.statusText} </i> </b>
                <br />
                <i> {Caughterror.error.message} </i>
            </p>
        </Card>
    )
}

export default ErrorPage
