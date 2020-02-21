const repl = require('repl')
const createAccount = require("./createAccount")




// const newUser:userAccount = {
//     name: "Luan",
//     cpf: 18337496770,
//     dateOfBirth: moment('15/03/1997', 'DD/MM/YYYY').format('DD/MM/YYYY')
// }

const start = async () => {
    const replServer = repl.start({
        prompt: "server console > "
    })
    //replServer.context.newUser = newUser
    replServer.context.createAccount = createAccount

}

start()