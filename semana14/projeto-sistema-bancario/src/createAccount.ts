import * as moment from "moment"
moment.locale('pt-br')
import { getAllAccounts } from "./getAllAccounts"

type accountUser = {
    name: string,
    cpf: number,
    dateOfBirth: string,
    balance: number,
    extract: expense[]
}

type expense = {
    value: number,
    date: string,
    description: string,
}

async function createAccount() {
    const list = await getAllAccounts()

    const newUser:accountUser = {
        name: "Luan",
        cpf: 18337496770,
        dateOfBirth: moment('15/03/1997', 'DD/MM/YYYY').format('DD/MM/YYYY'),
        balance: 0,
        extract: []
    }

    list.allAccounts.push(newUser)
}

module.exports = createAccount