import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const Caughterror = useRouteError()
    if(!Caughterror) {
        return
    }

    console.error(Caughterror)
    return (
        <div id="error-page">
            <h1> Oops! </h1>
            <p> Sorry, an unexpected error has occurred. </p>
            <br />
            <p>
                <b> <i> {Caughterror.status} - {Caughterror.statusText} </i> </b>
                <br />
                <i> {Caughterror.error.message} </i>
            </p>
        </div>
    )
}

export default ErrorPage
