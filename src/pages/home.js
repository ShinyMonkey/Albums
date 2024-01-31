import { useAlbums } from "../hooks"
import { Loader } from "../components";
import Card from "./album";
import '../styles/Home.css';
import { Outlet, Link } from "react-router-dom";
const Home=()=>{
    const useAlbum = useAlbums();
    const albums = useAlbum.albums;
    console.log("lol",useAlbum);
    if(useAlbum.loading){
        return <Loader/>
    }

    return (
        <>
        <Link to="/createalbum" className="add-button">
        <span><img src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" alt="add" style={{ width: '20px', height: '20px', color:'white', marginRight:'2px' }}/></span>
        Add
      </Link>
        <div className="home-container">
      {albums.map((card, index) => (
        <Card key={card.id} heading={card.title}  index={index} Id={card.id} title={card.title}/>
      ))}
    </div>
    <Outlet/>
        </>
        
    )
}

export default Home