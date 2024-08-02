import { useContext, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
import ButtonSubmitElement from '../components/ButtonSubmit'
import ContainerElement from '../components/Container'
import TitleElement from '../components/Title'
import InputElement from '../components/Input'
import ErrorElement from '../components/ErrorMessage'


const Label = styled.label`
    color: #555;
`

const TranslatedText = styled.p`
    color: #333;
    border-radius:18px;
    text-align: center;
`

const LanguageTranslator = () => {

    const { isAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLang, setSourceLang] = useState('en')
    const [targetLang, setTargetLang] = useState('pt')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const translateText = async () => {
        try {
            setLoading(true);
            setTranslatedText('');
            const response = await axios.get('https://api.mymemory.translated.net/get', {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`,
                },
            })

            setTranslatedText(response.data.responseData.translatedText);
            setError('');
            setLoading(false);
        } catch(error) {
            console.error("Erro ao traduzir o texto: ", error);
            setTranslatedText('');
            setError(error.message);
            setLoading(false);
        }
    }

    if(!isAuthenticated){
        return <Navigate replace to="/Login" />; 
    }else{
        return(
            <>
            <ButtonSubmitElement onClick={() => navigate("/")} text="Home" estilo={{ marginLeft: '30px', border: '2px solid #ffff' }} />
            <ContainerElement>
                <TitleElement text="Language Translator"/>
                <div>
                    <Label>Source Language:</Label>
                    <select value={sourceLang} onChange={(event) => setSourceLang(event.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Portuguese</option>
                    </select>
                </div>
    
                <div>
                    <Label>Target Language:</Label>
                    <select value={targetLang} onChange={(event) => setTargetLang(event.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Portuguese</option>
                    </select>
                </div>
    
                <InputElement
                    name="frase"
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder='Informe o texto que quer traduzir'
                />
    
                <ButtonSubmitElement onClick={translateText} text="Translate"/>
    
                {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
                {loading && <p>...</p>}
                {error && <ErrorElement text={error}/>}
            </ContainerElement>
            </>
        )

    }

}

export default LanguageTranslator