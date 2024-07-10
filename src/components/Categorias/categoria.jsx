import VideoCategoria from '../VideoCategoria/videoCategoria';
import './categoria.css'
const CategoriaVideo=({ categoria, videos, onDelete, onEdit })=>{
    const obj={
        backgroundColor: categoria.colorPrimario
    }
    const videosFiltrados = videos.filter(video => {
        return video.categoría == categoria.categoria
    });
    if (videosFiltrados.length > 0) {
        return <section className="categoria">
        <h3 style={obj}>{categoria.categoria}</h3>
        <div className="contenedor-video">
            {
                videosFiltrados.map(video =>{
                    return <VideoCategoria categoria={categoria}key={video.id} video={video} onDelete={onDelete} onEdit={onEdit}/>
                })
            }
        </div>
        </section>
    }
    
}

export default CategoriaVideo;