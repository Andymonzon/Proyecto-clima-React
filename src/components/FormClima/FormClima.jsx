/* eslint-disable react/prop-types */
import { useState } from "react"
import './FormClima.css'

const initialForm = {
    pais: '',
    ciudad: '',
}

const FormClima = ({ infoClima }) => {

    const [form, setForm] = useState(initialForm)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(!form.pais || !form.ciudad){
            alert('Complete los campos')
            return
        }

        infoClima(form)
        setForm(initialForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="pais" onChange={handleChange} value={form.pais} placeholder="Pais" autoComplete="off"/>
            <input type="text" name="ciudad" onChange={handleChange} value={form.ciudad} placeholder="Ciudad" autoComplete="off"/>
            <input type="submit" />
        </form>
    )
}

export { FormClima }