import React, { useState } from 'react';
import { useAlbums } from '../hooks';
import { useToasts } from 'react-toast-notifications';
import { Outlet, useNavigate} from 'react-router-dom';
import '../styles/AddAlbum.css'




const AddAlbum = () => {
  
const {albums, addAlbum}= useAlbums();
const [userId,setUserId]=useState('');
const [title,setTitle]=useState('');
const negative = useNavigate();
const {addtost} = useToasts();

const clear=()=>{
    setUserId('');
    setTitle('');
}

const updateAlbum=async (e)=>{
  e.preventDefault();
    if(!userId || !title){
       addtost('Fill all the fields',{
            appearance:'error',
        })
    }
    
    const albumLength = albums.length - 1;
    const newAlbumId = albums[albumLength].id + 1;
    console.log("norg",newAlbumId);

    const obj = {
        userId:parseInt(userId),
        id:30,
        title:title,
    }
    console.log("norg",obj.id);


    addAlbum(obj);
    clear();
    negative('/');
    return;

}


  return (
    <>
    <div className="add-album-container">
      <h2>Add Album Page</h2>
      <form className="album-form" onSubmit={updateAlbum}>
        <label>
          User ID:
          <input type="text" placeholder='UserId' value={userId} onChange={(e)=> setUserId(e.target.value)} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        </label>
        <br />
        <button type='submit'>Add Album</button>
      </form>
    </div>
    <Outlet/>
    </>
  );
};

export default AddAlbum;