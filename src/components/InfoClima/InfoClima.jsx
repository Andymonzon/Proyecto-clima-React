import { useEffect, useState } from "react"
import { FormClima } from "../FormClima/FormClima"
import './InfoClima.css'
import { DataClima } from "../DataClima/DataClima"
import { Espera } from "../Espera/Espera"
import { Loader } from "../Loader/Loader"

const InfoClima = () => {

    const [data, setData] = useState(null)
    const [info, setInfo] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (data === null) return

        setLoading(true)

        const url = 'https://api.openweathermap.org/data/2.5/weather'
        const apiKey = '&appid=2b229149fd051033d2a47c170723f141'
        const ciudadUrl = '?q=' + data.ciudad
        const urlPais = ',' + data.pais
        const clima = `${url + ciudadUrl + urlPais + apiKey}`

        const getClima = async (url) => {
            const response = await fetch(url)
            const data = await response.json()
            if (data.cod === '404') {
                setInfo(null)
            } else {
                setInfo(data)
            }
            setLoading(false)
        }
        getClima(clima)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
    const infoClima = (data) => {
        if (data) {
            setData(data)
        } else {
            setData(null)
        }
    }

    return (
        <div className="contenedor-info">
            <FormClima infoClima={infoClima} />
            {loading && <Loader />}
            {!info && !loading && <Espera/>}
            {info && !loading && <DataClima info={info} />}
        </div>
    )
}

export { InfoClima }