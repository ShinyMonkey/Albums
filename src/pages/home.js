import { useAlbums } from "../hooks"
import { Loader } from "../components";
import Card from "./album";
import '../styles/Home.css';
const Home=()=>{
    const useAlbum = useAlbums();
    const albums = useAlbum.albums;
    console.log("lol",useAlbum);
    if(useAlbum.loading){
        return <Loader/>
    }

    return (
        <>
        <div className="home-container">
      {albums.map((card, index) => (
        <Card key={card.id} heading={card.title}  index={index}/>
      ))}
    </div>
        </>
    )
}

export default Home