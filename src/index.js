import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {App} from './components/index';
import {ToastProvider} from 'react-toast-notifications'
import { AlbumProvider } from './providers/AlbumProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={5000} placement='top-left'>
    <AlbumProvider>
    <App />
    </AlbumProvider>
    
    </ToastProvider>
    
  </React.StrictMode>
);


