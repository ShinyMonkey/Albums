import { useContext,useEffect,useState } from "react";
import { AlbumContext } from "../providers/AlbumProvider";
import {useToasts} from 'react-toast-notifications';

export const useAlbums=()=>{
    return useContext(AlbumContext);
}


export const useAlbumProvider=()=>{

    const [albums,setAlbums] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError]=useState(false);
    const [searchedAlbum,setSearchedAlbum]=useState([]);
    const {addToast}= useToasts();


    const featchalbum=async ()=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const data= await response.json();
            console.log(data);
            setAlbums(data.slice(0,30));
            setSearchedAlbum(data.slice(0,30));
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Something went wrong');
        }
    };


    useEffect(()=>{
        setLoading(true);
        setAlbums([]);
        setError(false);
        featchalbum();
    },[]);


    return{
        albums,
        loading,
        searchedAlbum
    }
}


