import React, { useState,useEffect } from 'react';
import { useAlbums } from '../hooks';
import { useToasts } from 'react-toast-notifications';
import { Outlet, useNavigate,useParams} from 'react-router-dom';
import '../styles/AddAlbum.css'




const EditAlbum = () => {
  
const [album,setAlbumData] = useState('')
const {albums, editAlbum}= useAlbums();
const [userId,setUserId]=useState('');
const [title,setTitle]=useState('');
const negative = useNavigate();
const {addtost} = useToasts();
const {albumId} = useParams();

useEffect(() => {
    // Retrieve the album details when editing
    if (albumId) {
        const parsedAlbumId = parseInt(albumId, 10);
        const Album = albums.find((album) => album.id === parsedAlbumId);
      if (Album) {
        setAlbumData({
          userId: Album.userId,
          title: Album.title,
        });
      }
    }
  }, [albumId]);

const clear=()=>{
    setUserId('');
    setTitle('');
}

const edit=async (e)=>{
  e.preventDefault();
    if(!userId || !title){
       addtost('Fill all the fields',{
            appearance:'error',
        })
    }
    

    const obj = {
        userId:parseInt(userId),
        id:parseInt(albumId),
        title:title,
    }

    console.log("Object",obj);


    editAlbum(obj);
    clear();
    negative('/');
    return;

}


  return (
    <>
    <div className="add-album-container">
      <h2>Edit Album Page</h2>
      <form className="album-form" onSubmit={edit}>
        <label>
          User ID:
          <input type="text" placeholder={`${album.userId}`} value={userId} onChange={(e)=> setUserId(e.target.value)} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" placeholder={`${album.title}`} value={title} onChange={(e)=> setTitle(e.target.value)} />
        </label>
        <br />
        <button type='submit'>Edit Album</button>
      </form>
    </div>
    <Outlet/>
    </>
  );
};

export default EditAlbum;