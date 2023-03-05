import './Loader.css'


function Loader({color="border-slate-400", size="36px", thickness="3px", className, style}) {
    return (
        <span 
        className={`Loader ${color} ${className}`} 
        style={{width:size, height:size, borderWidth:thickness, ...style}} 
        />
    )
}

export default Loader