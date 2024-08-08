import axios from "axios"

function GetUser() {

    const sendRequest = () => {
        axios.get('https://reqres.in/api/users/2')
        .then(response => {
            console.log('Dados do usuário:', response.data)
            alert('Usuário recuperado:' + JSON.stringify(response.data))
        })
        .catch(error => {
            console.log('Erro ao recuperar o usuário:', error)
            alert('Erro ao recuperar os dados do usuário')
        })    
    }
   
    return(
        <button onClick={sendRequest}>Recuperar dados</button>
    )
}

export default GetUser