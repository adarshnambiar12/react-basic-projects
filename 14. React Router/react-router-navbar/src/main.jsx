import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import User from './User.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         errorElement: <div>Oops! The page you are looking for does not exist.</div>,
//         children: [
//             {
//                 path: '',
//                 element: <Home />,
//             },
//             {
//                 path: 'home',
//                 element: <Home />,
//             },
//             {
//                 path: 'about',
//                 element: <About />,
//             },
//             {
//                 path: 'user/:username',
//                 element: <User />,
//             },
//             {
//                 path: 'user',
//                 element: <div>Please specify a username in the URL (e.g., /user/JohnDoe).</div>,
//             },
//         ],
//     },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='user/:username' element={<User />} />
            <Route path='user' element={<div>Please specify a username in the URL (e.g., /user/JohnDoe).</div>} />
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
