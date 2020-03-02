import { ResidentialClient } from "./residentialClient"
import { CommercialClient } from "./commercialClient"
import { IndustrialClient } from "./industrialClient"
import { ClientManager } from "./clientManager"

export const residencia1 = new ResidentialClient("Carlos", 1, 35, "Carlos", "421.575.930-71", "72339-035" )
export const residencia2 = new ResidentialClient("Paulo", 2, 30, "Paulo", "712.986.120-71", "65058-660")

export const commercial1 = new CommercialClient("Daniel", 3, 170, "Loja Daniel's", "39.764.825/0001-18", "65061-460")
export const commercial2 = new CommercialClient("Jordana", 4, 200, "Gunners Acessórios", "13.354.491/0001-10", "76829-364")

export const industry1 = new IndustrialClient("Rodolfo", 5, 700, "Industria do Rodolfo", '1', "54460-460")
export const industry2 = new IndustrialClient("Charlie", 6, 1000, "InCharlie", '2', '40810-320')

const AdmTaOn = new ClientManager()
AdmTaOn.addClient(residencia1)
AdmTaOn.addClient(residencia2)
AdmTaOn.addClient(commercial1)
AdmTaOn.addClient(commercial2)
AdmTaOn.addClient(industry1)
AdmTaOn.addClient(industry2)
console.log(AdmTaOn.clients)
console.log(AdmTaOn.getClientsQuantity())
AdmTaOn.printClientBills()
AdmTaOn.calculateAllIncome()