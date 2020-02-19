import { SaltyDish } from "./saltydish"
import { Dessert } from "./dessert"
import { Dish } from "./dish"

const feijoada = new SaltyDish("Feijoada", 100, 20, ["feijão preto", "Carne", "Bacon", "Folha de Louro"], 100)
const batataFrita = new SaltyDish("Batata Frita", 20, 5, ["Batata"], 10)

const brigadeiro = new Dessert('Brigadeiro', 100, 20, ["leite condensado", "Achocolatado", "Manteiga"], 100, 10)
const boloDeCenoura = new Dessert('Bolo de Cenoura', 15, 4, ["Cenoura", "Farinha de Trigo", "ovos", "fermento"], 40, 2)

export let menu:Dish[] = [
    feijoada,
    batataFrita,
    brigadeiro,
    boloDeCenoura
]

