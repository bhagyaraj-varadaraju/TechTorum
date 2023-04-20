import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomeFeed from './Pages/ErrorPage'
import ErrorPage from './Pages/ErrorPage'
import CreatePost from './Pages/ErrorPage'
import ViewPost from './Pages/ErrorPage'
import EditPost from './Pages/ErrorPage'
import NavHeader from './Components/NavHeader'

import './App.css'

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeFeed />,
            errorElement: <ErrorPage />,
            children:
            [
                {
                    path: "new-post",
                    element: <CreatePost />
                },
                {
                    path: ":title-:id",
                    element: <ViewPost />
                },
                {
                    path: ":id/edit",
                    element: <EditPost />
                }
            ]
        }
    ]);

    return (
        <div className="App">
            <NavHeader />
            
            <div className="whole-page">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App
