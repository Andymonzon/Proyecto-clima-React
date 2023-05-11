import { InfoClima } from "../InfoClima/InfoClima"
import './ClimaTarjeta.css'

const ClimaTarjeta = () => {

    return (
        <div className="contenedor">
            <h1>Clima Tarjeta</h1>
            <div className="tarjeta">
                <InfoClima />
            </div>
        </div>
    )
}

export { ClimaTarjeta }