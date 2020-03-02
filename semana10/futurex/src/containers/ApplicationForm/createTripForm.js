export const createTripForm = [
    {
        name: "name",
        type: "text",
        label: "Nome",
        required: true,
        pattern: "([A-Za-z ]|[^A-Za-z ]){3,}",
        errorMessage: "Digite um nome válido"
    },
    {
        name: "age",
        type: "number",
        label: "Idade",
        required: true,
        pattern: "^0?1[89]|0?[2-9][0-9]$",
        min: "18",
        errorMessage: "Você tem que ser maior de 18 anos"
    },
    {
        name: "applicationText",
        type: "text",
        label: "Explique o motivo de você ser um bom candidato",
        required: true,
        pattern: "([A-Za-z0-9 ]|[^A-Za-z ]){30,}",
        errorMessage: "Digite no mínimo 30 caracteres"
    },
    {
        name: "profession",
        type: "text",
        label: "Profissão",
        required: true,
        pattern: "([A-Za-z ]|[^A-Za-z ]){10,}"
    }
]