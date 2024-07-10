import { Link } from "react-router-dom";
import './404.css'
const Page404=()=>{
    return (
        <div className="content">
            <svg viewBox="0 0 960 300" className="svg">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="50%">404</text>
                </symbol>
                <g className = "g-ants">
                    <use xlinkHref="#s-text" className="text"></use>
                    <use xlinkHref="#s-text" className="text"></use>
                    <use xlinkHref="#s-text" className="text"></use>
                    <use xlinkHref="#s-text" className="text"></use>
                    <use xlinkHref="#s-text" className="text"></use>
                </g>
            </svg>
        <h1 className="titulo-404">Pagina no encontrada</h1>
        <Link to='/' className="enlace-404">Volver al inicio</Link>
    </div>
    )
}
export default Page404;