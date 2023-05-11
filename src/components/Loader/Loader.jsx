import './Loader.css'

const Loader = () => {
    return(
        <div className='contenedor-loader'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export { Loader }