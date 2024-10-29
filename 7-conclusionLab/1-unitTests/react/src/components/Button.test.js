import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('Componente do Botão', () => {
    test('Deve renderizar o texto do botão', () => {
        render(<Button label="Clique Aqui"/>)
        expect(screen.getByText('Clique Aqui')).toBeInTheDocument()
    })

    test('Deve chamar a função onClick ao clicar', () => {
        const onClickMock = jest.fn()
        render(<Button label="Clique Aqui" onClick={onClickMock}/>)

        fireEvent.click(screen.getByText('Clique Aqui'))

        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
})

module.exports = {
    testEnvironment: "jsdom"
}