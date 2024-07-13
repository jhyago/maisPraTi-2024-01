import { useState } from 'react'

function Form2() {
    const [ address, setAddress ] = useState({
        street: '',
        city: '',
        postalCode: ''
    })



    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name='rua' value={address.street} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name='cidade' value={address.city} onChange={handleChange}/>
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name='cep' value={address.postalCode} onChange={handleChange}/>
            </label>
            <br />
            <button type='submit'>Submeter</button>
        </form>
    )
}   

export default Form2