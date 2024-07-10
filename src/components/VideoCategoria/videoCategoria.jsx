/* eslint-disable react/no-unknown-property */
import styled from 'styled-components';
import './videoCategoria.css';

const Iframe=styled.iframe`
        border: 2px solid ${props => props.$borderColor};
        border-radius: 2rem;
        width: 100%;
    `;

const ContenedorVideo=styled.div`
    border: 2px solid ${props => props.$borderColor};
    margin-bottom: 1rem;
    border-radius: 2rem;
    flex:0 0 calc(33.3% - 2rem);

    @media (max-width: 992px) {
        flex:0 0 calc(50% - 2rem);
    }
    @media (max-width: 768px) {
        flex:0 0 calc(100%);
    }
`
const VideoCategoria= ({ categoria, video, onDelete, onEdit })=>{
    
    return <ContenedorVideo $borderColor={categoria.colorPrimario}>
        <Iframe width="460" height="315" src={video.enlace} title='YouTube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen $borderColor={categoria.colorPrimario}></Iframe>
        <div className="opciones">
            <button className="opcion" onClick={() => onDelete(video.id)}>
                <i className="fa-regular fa-trash-can"></i>
                <p>Borrar</p>
            </button>
            
            <button className="opcion" onClick={() => onEdit(video.id)}>
                <i className="fa-regular fa-pen-to-square"></i>
                <p>Editar</p>
            </button>
        </div>
    </ContenedorVideo>
}
export default VideoCategoria;