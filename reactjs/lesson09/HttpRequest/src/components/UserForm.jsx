// Import useState from React and axios for making HTTP requests
import { useState } from 'react';
import axios from 'axios';

// Define the UserForm component
function UserForm() {
    // Initialize state for the form with fields 'name' and 'job'
    const [user, setUser] = useState({
        name: '',
        job: ''
    });

    // Handle changes in the form inputs
    const handleChange = (event) => {
        // Destructure the name and value from the target element
        const { name, value } = event.target;

        // Update the user state, preserving other fields
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        try {
            // Send a POST request to the API endpoint with the user data
            const response = await axios.post('https://reqres.in/api/users', user);

            // Log the response data to the console for debugging
            console.log(response.data);

            // Show a success alert with the new user's information
            alert(`Usuário criado com sucesso! ID: ${response.data.id}, Nome: ${user.name}, Job: ${user.job}`);
        } catch (error) {
            // Log the error to the console
            console.error('Erro ao criar o usuário:', error);

            // Show an error alert
            alert('Erro ao criar o usuário');
        }
    };

    // Render the form component
    return (
        <form onSubmit={handleSubmit}>
            <h1>Registrar Usuário</h1>

            {/* Name input field */}
            <label>
                Nome:
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required // Makes the input required
                    placeholder="Digite seu nome" // Adds a placeholder for better UX
                />
            </label>
            <br />

            {/* Job input field */}
            <label>
                Profissão:
                <input
                    type="text"
                    name="job"
                    value={user.job}
                    onChange={handleChange}
                    required // Makes the input required
                    placeholder="Digite sua profissão" // Adds a placeholder for better UX
                />
            </label>
            <br />

            {/* Submit button */}
            <button type="submit">Enviar</button>
        </form>
    );
}

// Export the UserForm component as the default export
export default UserForm;