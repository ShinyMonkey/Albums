import '../styles/Card.css'
import { Link,Outlet } from 'react-router-dom'
import { useAlbums } from '../hooks';
const Card = ({Id, heading,index}) => {
  const {deleteAlbum} = useAlbums();

  // const deleted=async (Id)=>{
  //   deleteAlbum

  // }
    return (
      <>
      <div className="card">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuwH-hdr-I4j6oZFPAm8cJRKO5h5dLypKQkAIRrhLgg&s"} alt="Card Image" />
        <div className="card-content">
          <h3>{`Album-${index+1}`}</h3>
          <p>{heading}</p>
        </div>
        <div className="card-buttons">
          {/* {console.log("Link",`/edit/${Id}`)} */}
          <Link to={`/edit/${Id}`} className="edit-button">Edit</Link>
          <button onClick={()=>deleteAlbum(Id)} className="remove-button">Remove</button>
        </div>
      </div>
      <Outlet/>
      </>
    );
  };
  
  export default Card;