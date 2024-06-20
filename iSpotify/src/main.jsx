import React from 'react';
import ReactDOM from 'react-dom/client';

// Packages Import
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages Import
import Home from './pages/Home/Home.jsx';
import Playlist from './pages/Playlist/Playlist.jsx';
import LikedMusics from './pages/LikedMusics/LikedMusics.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found  <a href="/">Go To Main Page</a> </div>
  },
  {
    path: '/playlist',
    element: <Playlist />,
  },
  {
    path: '/liked-musics',
    element: <LikedMusics />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

/*import React from 'react';
import ReactDOM from 'react-dom/client';

// Packages Import
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages Import
import Home from './pages/Home/Home.jsx';
import Playlist from './pages/Playlist/Playlist.jsx';
import LikedMusics from './pages/LikedMusics/LikedMusics.jsx';


import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found  <a href="/">Go To Main Page</a> </div>
  },
  {
    path: '/playlist',
    element: <Playlist/>,
  },
  {
    path: '/liked-musics',
    element: <LikedMusics/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);*/
