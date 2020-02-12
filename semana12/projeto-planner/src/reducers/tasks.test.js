import { setTasks } from '../actions/tasks'
import tasks from './tasks'

describe('Testa o task reducer', () => {
    test('testa set tasks', () => {

        //Preparação
        const currentState = {
            allTasks: []
        }

        const action = setTasks([
            {
                "id": "jGH9xnVXQMeU3tZOQ2Gy",
                "Day": "Segunda",
                "Text": "Lavar a louça"
            },
            {
                "id": "VatIA1QvGfcncCmwTaED",
                "Text": "Dormir",
                "Day": "Domingo"
            }
        ])

        
        //Execução
        const newState = tasks(currentState, action)

        //Verificação
        expect(newState.allTasks).toHaveLength(2)
        expect(newState.allTasks[0].Day).toEqual("Segunda")
        expect(newState.allTasks[1].Day).toEqual("Domingo")
        expect(newState.allTasks[0].Text).toEqual("Lavar a louça")
        expect(newState.allTasks[1].Text).toEqual("Dormir")
    })
})