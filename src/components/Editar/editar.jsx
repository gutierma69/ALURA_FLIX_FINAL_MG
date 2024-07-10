import { useState } from "react";
import styled from "styled-components";
import CampoTexto from "../CampoTexto/campoTexto";
import './editar.css'
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #03122F;
  padding: 2rem;
  border: 2px solid #6BD1FF;
  border-radius: 8px;
  width: 800px;
  max-width: 100%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
const EditarVideo=({video, onClose, onSave})=>{
    const [formData, setFormData] = useState(video);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };
    return (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <h2 className="titulo">EDITAR CARD:</h2>
            <form onSubmit={handleSubmit}>
              <CampoTexto title="Título" type="text" name="título" value={formData.título} event={handleChange} placeholder="Ingrese el titulo"/>

              <CampoTexto title="Categoría" type="select" name="categoría" value={formData.categoria} event={handleChange} placeholder="Seleccione una categoria"/>
    
              <CampoTexto title="Imagen" type="text" name="imagen" value={formData.imagen} event={handleChange} placeholder="El enlace es obligatorio"/>
    
              <CampoTexto title="Video" type="text" name="enlace" value={formData.enlace} event={handleChange} placeholder="Ingrese el enlace del video"/>
              
              <CampoTexto title="Descripción" type="textarea" name="descripción" value={formData.descripción} event={handleChange} placeholder="¿De que trata este video?"/>
    
              <div className="buttons">
                <button type="submit" className="buttonSave button">GUARDAR</button>
                <button type="button" className="buttonClear button" onClick={() => setFormData(video)}>RESTAURAR</button>
              </div>
            </form>
          </ModalContent>
        </ModalOverlay>
      );
    
    
}
export default EditarVideo