import '../styles/App.css';
import {Navbar,Loader} from './';
import { useAlbums } from '../hooks';
import { Home,Card } from '../pages';

function App() {
  const album = useAlbums();
  console.log(album);
  if(album.loading){
    return <Loader/>;
  }
  return (
    <div className="App">
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
