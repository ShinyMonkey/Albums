import { createContext } from "react";
import { useAlbumProvider } from "../hooks";


const initialState={
    albums:[],
    loading:true,
    error:false,
    addAlbum:()=>{},
    editAlbum:()=>{},
    deleteAlbum:()=>{}
    
}


export const AlbumContext = createContext(initialState);

export const AlbumProvider = ({children})=>{
    const album = useAlbumProvider();
    return (
        <AlbumContext.Provider value={album}>
            {children}
        </AlbumContext.Provider>
    )
}