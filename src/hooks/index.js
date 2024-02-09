import { useContext,useEffect,useState } from "react";
import { AlbumContext } from "../providers/AlbumProvider";
import {useToasts} from 'react-toast-notifications';

export const useAlbums=()=>{
    return useContext(AlbumContext);
}


export const useAlbumProvider=()=>{

    const [albums,setAlbums] = useState([]);
    const [loading,setLoading] = useState(true);
    const {addToast}= useToasts();


    const featchalbum=async ()=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const data= await response.json();
            console.log(data);
            setAlbums(data.slice(0,30));
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };


    useEffect(()=>{
        setLoading(true);
        setAlbums([]);
        featchalbum();
    },[]);



    // create a new album
    const createAlbum= async(album)=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
                method:'POST',
                body: JSON.stringify({
                    id:album.id,
                    title:album.title,
                    userId:album.userId
                }),
                headers:{
                    "Content-type":"application/json; charset=UTF-8"
                }
            })

            const data = await response.json();
            console.log(data);
        } catch (error) {
            addToast.error(`Error , ${error}`);
        }
    }


    // updating added album
    const addAlbum = (album) => {
        albums.push(album);
        createAlbum(album)
        addToast("New Album successfully added!",{
            appearance:'success'
        });
      };



    //   edit a  album
    const edit= async(album)=>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${album.id}`,{
                method: 'PUT',
                body:JSON.stringify({
                    id:album.id,
                    title:album.title,
                    userId:album.userId
                }),
                headers:{
                    "Content-type":"application/json; charset=UTF-8"
                }
            })
            const data= await response.json();
            console.log(data);

        } catch (error) {
            addToast(`Error,${error}`,{
                appearance:'error',
            })
        }
    }

    // edit album function

    const editAlbum=(album)=>{
        const index = albums.findIndex((item)=> item.id===album.id);
        albums.splice(index,1,album);
        edit(album);
        setAlbums(albums);
        addToast('Album successfully Edited',{
            appearance:'success',
        })
    }


    // delete request for an album
    const deleted=async(id)=>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                method: 'DELETE'
            })
            const data = await response.json();
            console.log(data);
        } catch (error) {
            addToast(`Error,${error}`,{
                appearance:'error',
            }) 
        }
    }


    // delete function
    const deleteAlbum=(id)=>{
        console.log(id)
        const newData= albums.filter((album)=> album.id !== id);
        setAlbums(newData);
        deleted(id);
        addToast('Album successfully Deleted',{
            appearance:'success',
        })

    }


    
    return{
        albums,
        loading,
        addAlbum,
        editAlbum,
        deleteAlbum
    }

}


