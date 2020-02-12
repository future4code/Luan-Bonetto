import { setTasks, getTasks, createTask } from './tasks'
import axios from 'axios'

describe('Testa actions de task', () => {

    test('testa setTasks action', () => {

        //Preparação
        const tasksDeTeste = [
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
        ]

        //Execução
        const action = setTasks(tasksDeTeste)

        //Verificação
        expect(action.type).toEqual('SET_TASKS')
        expect(action.payload).toEqual({ "tasks": tasksDeTeste })
    })

    test("Deve Retornar uma lista de tasks", async () => {

        //Preparação
        const taskDeTeste = [{
            "id": "jGH9xnVXQMeU3tZOQ2Gy",
            "Day": "Segunda",
            "Text": "Lavar a louça"
        },
        {
            "id": "VatIA1QvGfcncCmwTaED",
            "Text": "Dormir",
            "Day": "Domingo"
        }]

        //Mock do Dispatch
        const dispatch = jest.fn()

        axios.get = jest.fn(() => {
            return {
                data: taskDeTeste
            }
        })

        //Execução
        await getTasks()(dispatch)

        //Verifica se o dispatch foi verificado com a ação correta
        expect(dispatch).toHaveBeenCalledWith(setTasks(taskDeTeste))
    })

    // test("Deve criar uma nova task", async () => {

    //     //Preparação
    //     const taskInfo = {
    //         Text: "Bananinha",
    //         Day: "Segunda",
    //     }

    //     axios.post = jest.fn(() => {
    //         taskInfo
    //     })

    //     //Execução
    //     await createTask(taskInfo)

    //     //Verifica se a task foi criada com sucesso
    //     expect(createTask).toEqual(taskInfo)

    // })

})