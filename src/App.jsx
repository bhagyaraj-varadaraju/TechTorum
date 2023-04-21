import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeFeed from './Pages/HomeFeed'
import ErrorPage from './Pages/ErrorPage'
import CreatePost from './Pages/CreatePost'
import ViewPost from './Pages/ViewPost'
import EditPost from './Pages/EditPost'
import RootLayout from './Pages/RootLayout'
import './App.css'

const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            element: <HomeFeed />
        },
        {
            path: '/new-post',
            element: <CreatePost />
        },
        {
            path: '/:title/:id',
            element: <ViewPost />
        },
        {
            path: '/:id/edit',
            element: <EditPost />
        }
      ]
    },
])

function App() {

    return(
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
