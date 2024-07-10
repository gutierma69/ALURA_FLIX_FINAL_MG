import Banner from "../Banner/banner"
import CategoriaVideo from "../Categorias/categoria"
import EditarVideo from "../Editar/editar"

const Home=({resolucionPantalla,videos,categorias,handleDelete,handleEdit,selectedVideo,handleSave,setSelectedVideo})=>{
    return (
    <>
        {resolucionPantalla && videos.length > 0 && <Banner videos={videos} categoria={categorias}/>}
        {
            categorias.map((categoria) => <CategoriaVideo key={categoria.categoria} categoria={categoria} videos={videos} onDelete={handleDelete} onEdit={handleEdit}/>)
        }
        {selectedVideo && <EditarVideo video={selectedVideo} onClose={() => setSelectedVideo(null)} onSave={handleSave} />}
    </>
    )

}
export default Home;