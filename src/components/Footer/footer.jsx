import styled from "styled-components";
import logo from '../../img/logo.png'
const Contenedor=styled.footer`
    text-align: center;
    border-top: 1px solid #2271D1;
`
const ImagenFooter=styled.img`
    width: 25%;
    padding-top: 2rem;
`
const Footer =()=>{
    return <>
        <Contenedor>
            <ImagenFooter src={logo}/>
        </Contenedor>
    </>

}
export default Footer;