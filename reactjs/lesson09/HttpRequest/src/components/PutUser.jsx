import axios from 'axios';

function UpdateUser() {
    const userData = {
        name: 'Mihawk',
        job: 'Shichibukai'
    };

    const sendRequest = () => {
        axios.put('https://reqres.in/api/users/2', userData)
        .then(response => {
            console.log('Dados do usuário atualizados:', response.data);
            alert('Usuário atualizado: ' + JSON.stringify(response.data));
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error);
            alert('Erro ao atualizar dados do usuário.');
        });
    }   

    return(
        <button onClick={sendRequest}>Atualizar dados</button>
    )
}

export default UpdateUser