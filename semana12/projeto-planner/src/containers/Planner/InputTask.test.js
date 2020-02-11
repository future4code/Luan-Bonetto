import { shallow } from "enzyme"
import{ InputTask } from "./InputTask"
import React from 'react'
import renderer from 'react-test-renderer';


describe('Testa Componente InputTask', () => {
    test('Deve chamar a função handleOnSubmit ao clicar no botão', () => {

        const handleOnSubmitMock = jest.fn()

        const componente = shallow(<InputTask handleOnSubmit={handleOnSubmitMock} />)

        const Button = componente.find(Button)

        Button.simulate('click')

        expect(handleOnSubmitMock).toHaveBeenCalledTimes(1)
    })

    test('Snapshot', () => {
        const tree = renderer
        .create(<InputTask/>)
        .toJSON();
        expect(tree).toMatchSnapshot()
    })
})