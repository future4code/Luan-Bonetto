const fs = require("fs")

const path = __dirname + '/database.json'

type allAccounts = {
    allAccounts: []
}

export const getAllAccounts = async():Promise<allAccounts> => {
    return new Promise(async (resolve, reject) => {
        await fs.readFile(path, 'utf-8', (error: Error, database:string) => {
            if (error) {
                console.error(error)
            }
            const config = JSON.parse(database)
            resolve(config)
        })
    })  
}