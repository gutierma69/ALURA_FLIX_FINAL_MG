import "./banner.css";
import { EleccionBanner } from "../../utilities/eleccionBanner";
import styled from "styled-components";

const CategoriaVideo=styled.h1`
  background-color: ${props=>props.$backgroundColor};
  display: inline-block;
  font-size: 4rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 1rem;
  box-sizing: content-box;
  margin: 0;
  @media(max-width: 768px){
    font-size: 3.4rem;
  }
`
const TituloVideo=styled.h2`
  font-size: 3.4rem;
  @media(max-width: 768px){
    font-size: 2.8rem;
  }
`
const DescripcionVideo=styled.p`
  font-size: 1.8rem;
  line-height: 1.1;
  @media(max-width: 768px){
    font-size: 1.6rem;
  }
`
const Video=styled.iframe`
  border: 2px solid ${props => props.$borderColor};
  border-radius: 2rem;
  @media(max-width: 768px){
    width: 320px;
  }
`

const Banner = ({ videos, categoria }) => {
  if (!videos || videos.length === 0) {
    return null; 
  }
  let elegido = EleccionBanner(videos);
  const colorPrimario=categoria.filter(cat => cat.categoria==elegido.categoría).map(cat=>cat.colorPrimario);

  return (
    <div className="container">
      <div className="contenedor-izquierdo">
        <CategoriaVideo $backgroundColor={colorPrimario[0]}>{elegido.categoría}</CategoriaVideo>
        <TituloVideo>{elegido.título}</TituloVideo>
        <DescripcionVideo>{elegido.descripción}</DescripcionVideo>
      </div>
      <div className="contenedor derecho">
        <Video width="460" height="315" src={elegido.enlace} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen $borderColor={colorPrimario[0]}></Video>
      </div>
    </div>
  );
};
export default Banner;
