import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    color: #333;
    text-align: center;
`

const Label = styled.label`
    color: #555;
`

const TranslatedText = styled.p`
    color: #333;
    border-radius:18px;
    text-align: center;
`

const LanguageTranslator = () => {

    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLang, setSourceLang] = useState('en')
    const [targetLang, setTargetLang] = useState('pt')

    const translateText = async () => {
        try {
            const response = await axios.get('https://api.mymemory.translated.net/get', {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`,
                },
            })

            setTranslatedText(response.data.responseData.translatedText)
        } catch(error) {
            console.error("Erro ao traduzir o texto: ", error)
        }
    }

    return(
        <Container>
            <Title>Language Translator</Title>
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

            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder='Informe o texto que quer traduzir'
            />

            <button onClick={translateText}>Translate</button>

            {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
        </Container>
    )
}

export default LanguageTranslator