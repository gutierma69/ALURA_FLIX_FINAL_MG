import { useState } from 'react';
import CampoTexto from '../CampoTexto/campoTexto';
import { useNavigate } from 'react-router-dom';
import './nuevoVideo.css'

const NuevoVideo=({setVideos,videos})=>{
    const [formData, setFormData] = useState({
        título: '',
        categoría: '',
        imagen: '',
        enlace: '',
        descripción: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };
    const handleClear = () => {
        setFormData({
          título: '',
          categoría: '',
          imagen: '',
          enlace: '',
          descripción: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://my-json-server.typicode.com/Gianmarco1404/videos-educativos-api/videos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (response.ok) {
            const newVideo = await response.json();
            setVideos([...videos, newVideo]);
            handleClear();
            navigate('/');
          } else {
            console.error('Error al guardar el video');
          }
        } catch (error) {
          console.error('Error al guardar el video', error);
        }
    };
    return (
        <div className='formulario'>
            <h1 className='titulo'>NUEVO VIDEO</h1>
            <p className='parrafo'>Complete el formulario para crear una nueva tarjeta de video</p>
            <form method="post" onSubmit={handleSubmit}>
                <CampoTexto title='Título' type='text' name='título' value={formData.título} event={handleChange} placeholder='Ingrese el título'/>
                <div className='categoria-formulario'>
                    <CampoTexto title='Categoría' type='select' name='categoría' value={formData.categoría} event={handleChange} placeholder=''/>
                </div>
                <CampoTexto title='Imagen' type='text' name='imagen' value={formData.imagen} event={handleChange} placeholder='Ingrese el enlace de la imagen'/>
                <CampoTexto title='Video' type='text' name='enlace' value={formData.enlace} event={handleChange} placeholder='Ingrese el enlace del video'/>
                <CampoTexto title='Descripción' type='text' name='descripción' value={formData.descripción} event={handleChange} placeholder='¿De qué se trata este vídeo?'/>
                <div className="form-actions">
                    <button type="submit" className='guardar'>Guardar</button>
                    <button type="button" onClick={handleClear} className='limpiar'>Limpiar</button>
                </div>
            </form>
        </div>
    )  
}
export default NuevoVideo;