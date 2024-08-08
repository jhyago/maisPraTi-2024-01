import axios from 'axios';

function DeleteUser() {

    const sendRequest = () => {
        axios.delete('https://reqres.in/api/users/2')
        .then(response => {
            console.log('Usuário deletado, status:', response.status);
            alert('Usuário deletado com sucesso. Status: ' + response.status);
        })
        .catch(error => {
            console.error('Erro ao deletar usuário:', error);
            alert('Erro ao deletar usuário.');
        });
    }
    
    return(
        <button onClick={sendRequest}>Deletar dados</button>
    )
}

export default DeleteUser
