import './App.css'
import Header from './components/Header/header'
import useWidth from './hooks/useWidth';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/footer';
import NavMovil from './components/NavBarMovil/navMovil';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/home';
import NuevoVideo from './components/NuevoVideo/nuevoVideo';
import Page404 from './components/404/404';

function App() {
  const resolucionPantalla = useWidth()>576 ? true : false
  const location = useLocation(); 

  const categorias = [
    {
      categoria: 'FRONT END',
      colorPrimario: '#6BD1FF'
    },
    {
      categoria: 'BACK END',
      colorPrimario: '#00C86F'
    },
    {
      categoria: 'INNOVACIÓN Y GESTIÓN',
      colorPrimario: '#FFBA05'
    }
  ]
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  useEffect(() => {
    async function fetchdata(){
      const data=await fetch('https://my-json-server.typicode.com/Gianmarco1404/videos-educativos-api/videos');
      const json=await data.json()
      setVideos(json)
    }
    fetchdata();
  }, []);

  const handleDelete = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const handleEdit = (id) => {
    const video = videos.find(video => video.id === id);
    setSelectedVideo(video);
  };
  const handleSave = (updatedVideo) => {
    setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
    setSelectedVideo(null);
  };

  const showHeaderFooter = location.pathname === '/' || location.pathname === '/nuevo-video';


  return (
    <>
      {showHeaderFooter && resolucionPantalla && <Header />}
      <Routes>
        <Route exact path='/' element={
          <Home resolucionPantalla={resolucionPantalla} videos={videos} categorias={categorias} handleDelete={handleDelete} handleEdit={handleEdit} selectedVideo={selectedVideo} handleSave={handleSave} setSelectedVideo={setSelectedVideo}/>
        }>
        </Route>
        <Route path='/nuevo-video' element={
          <NuevoVideo setVideos={setVideos} videos={videos}/>
        }>
        </Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
      {showHeaderFooter && (resolucionPantalla ? <Footer /> : <NavMovil />)}

    </>
  )
}

export default App
