/* eslint-disable react/prop-types */
import './DataClima.css'

const DataClima = ({ info }) => {

   

    // console.log(info)
    const { weather, name, main, sys, wind } = info

    return (
        <div className='info-total'>
            <div className='localidad'>
                <figure>
                    <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={name} />
                </figure>
                <div className='info-texto'>
                    <h2 className='pais'>{sys.country}</h2>
                    <div>
                        <h3 className='ciudad'>{name}</h3>
                    </div>
                </div>
            </div>
            <p className='temperatura'>{(main.temp - 273.15).toFixed(1)}°C</p>
            <div className='mas-info'>
                <div className='temp-max border'>
                    <p>Max: {(main.temp_max - 273.15).toFixed(1)}°C</p>
                </div>
                <div className='temp-min border'>
                    <p>Min: {(main.temp_min - 273.15).toFixed(1)}°C</p>
                </div>
                <div className='sensacion-termica border'>
                    <p>Sensación térmica: {(main.feels_like - 273.15).toFixed(1)}°C</p>
                </div>
                <div className='humedad border'>
                    <p>Humedad: {main.humidity}%</p>
                </div>
                <div className='velocidad border'>
                    <p>Velocidad: {wind.speed}km/h</p>
                </div>
                <div className='presion border'>
                    <p>Presión: {main.pressure}</p>
                </div>
            </div>
        </div>
    )
}

export { DataClima }