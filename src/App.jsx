import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NewTestPage from "./pages/NewTestPage.jsx";
import MainPage from "./pages/MainPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/test",
        element: <NewTestPage/>,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
