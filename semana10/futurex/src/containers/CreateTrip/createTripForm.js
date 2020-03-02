export const createTripForm = [
    {
        name: "name",
        type: "text",
        label: "Nome Da Viagem",
        required: true,
        pattern: "([A-Za-z ]|[^A-Za-z ]){5,}",
        errorMessage: "Digite um nome válido"
    },
    {
        name: "date",
        type: "date",
        label: "Data",
        required: true,
        errorMessage: "Digite uma data válida",
    },
    {
        name: "description",
        type: "text",
        label: "Descrição",
        required: true,
        pattern: "([A-Za-z0-9 ]|[^A-Za-z ]){30,}",
        errorMessage: "Digite um nome válido"
    },
    {
        name: "durationInDays",
        type: "number",
        label: "Duração em dias",
        required: true,
        min: "50",
    },
]