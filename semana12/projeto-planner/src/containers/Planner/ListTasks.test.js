import { shallow } from "enzyme"
import { ListTasks } from "./ListTasks"
import React from 'react'
import renderer from 'react-test-renderer';

describe('Testa Componente InputTask', () => {
    test('Snapshot', () => {
        const tree = renderer
            .create(<ListTasks />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    })
})