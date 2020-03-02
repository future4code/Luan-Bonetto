import { menu } from "./menu"
import { Dish } from "./dish"
import { Cashier } from "./cashier"
import { Chef } from "./chef"
import { Employee } from "./employee"
import { Manager } from "./manager"

//novo Gerente
const managerAndChef = new Manager('Érick Jacquin', 15000)

//novo caixa
const newCashier = new Cashier('Carlos', 1200)

//consumo de um cliente
const clientConsumption:Dish[] = menu.slice(1, 3)
//calcular consumo
const consumptionTotal = newCashier.calculateBill(clientConsumption)
console.log(consumptionTotal)

// novo Chef
const newChef = new Chef('Linguini', 7000)
// Remove o Prato Feijoada do Menu
newChef.removeDishFromMenu('Feijoada')
// Add um novo Prato ao Menu
newChef.addDishToMenu('Arroz', 20, 5, ['cebola', 'alho', 'arroz'], 10, )

console.log('Numero de Funcionários:', Employee.numberOfEmployees)


