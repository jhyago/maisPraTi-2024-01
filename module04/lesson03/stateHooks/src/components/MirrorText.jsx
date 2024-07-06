import { useState } from 'react'

function MirrorText() {
    const [text, setText] = useState('')

    return (
        <div>
            <input type="text" value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <p>Você digitou: {text}</p>
        </div>
    )
}

export default MirrorText