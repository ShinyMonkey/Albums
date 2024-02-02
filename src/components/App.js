import '../styles/App.css';
import {Navbar,Loader} from './';
import { useAlbums } from '../hooks';
import { Home,AddAlbum,EditAlbum } from '../pages';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Helmet} from "react-helmet";

function App() {
  const album = useAlbums();
  console.log(album);
  if(album.loading){
    return <Loader/>;
  }


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:"/createalbum",
          element:<AddAlbum/>
        },
        {
          path:"/edit/:albumId",
          element:<EditAlbum/>
        },
      ]
    }
  ]);
  return (
    <>
    <Helmet>
    <meta http-equiv="Permissions-Policy" content="interest-cohort=()"></meta>
    </Helmet>
    <div className="App">
     <RouterProvider router={router}/>
    </div>
    </>
  );
}

export default App;
