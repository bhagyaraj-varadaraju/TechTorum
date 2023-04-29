import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeFeed from './Pages/HomeFeed'
import ErrorPage from './Pages/ErrorPage'
import CreatePost from './Pages/CreatePost'
import ViewPost from './Pages/ViewPost'
import EditPost from './Pages/EditPost'
import RootLayout from './Pages/RootLayout'
import './App.css'
import { SearchProvider } from './context/SearchContext'
import { Flex } from '@chakra-ui/react'

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
        <Flex className="App" bg='teal.600'>
            <SearchProvider>
                <RouterProvider router={router}>
                </RouterProvider>
            </SearchProvider>
        </Flex>
    )
}

export default App
