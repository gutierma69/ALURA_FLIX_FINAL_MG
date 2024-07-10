import './campoTexto.css'
const CampoTexto=({title,type,name,value,event,placeholder})=>{
    if(type !="select"){
        return <>
        <label className='title'>{title}</label>
        {type !="textarea" ? <input type={type} name={name} value={value} onChange={event} placeholder={placeholder} required className='input'/> : <textarea name={name} value={value} onChange={event} placeholder={placeholder} required className='textArea'></textarea>}
        </>
    }else{
        return <>
            <label className='title'>{title}</label>
            <select name={name} value={value} onChange={event} className='select'>
                <option value="" disabled>Elije una opcion</option>
                <option value="FRONT END">FRONT END</option>
                <option value="BACK END">BACK END</option>
                <option value="INNOVACIÓN Y GESTIÓN">INNOVACIÓN Y GESTIÓN</option>
            </select>
        </>
    }

}
export default CampoTexto